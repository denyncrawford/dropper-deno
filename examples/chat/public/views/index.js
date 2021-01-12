import Dropper from "https://raw.githack.com/denyncrawford/dropper-deno/main/dist/clients/dropper.browser.js";
export default {
  template: `
    <div class="flex p-10 w-screen h-screen justify-center items-center">
      <transition name="fade">
        <div v-show="!loading" class="flex flex-col border rounded p-10 text-center">
          <h1 class="text-4xl">Dropper Chat</h1>
          <h2 class="mt-5">Create a username</h2>
          <p class="mt-5 text-red-600" v-show="error">{{error}}</p>
          <input @keydown="error = ''" class="text-center font-bold mt-5 px-5 py-2 rounded border" type="text" v-model="username">
          <button @click="initChat" class="font-bold text-sm px-5 mt-5 py-2 bg-gray-50 rounded border">
            JOIN
          </button>
        </div>
      </transition>
    </div>
  `,
  data() {
    return {
      error: ''
    }
  },
  methods: {
    ...Vuex.mapMutations(['toggleLoading','setDropper', 'updateUser']),
    initChat() {
      if (!this.username.length) return this.error = 'Please provide a username'
      this.updateUser()
      this.$router.push({ name: 'chat' })
    },
  },
  computed: {
    ...Vuex.mapState(['loading']),
    username: {
      get () {
        return this.$store.state.user.username
      },
      set (value) {
        this.$store.commit('updateUsername', value)
      }
  }
  },
  async mounted() {
    const dropper = new Dropper(`ws://${window.location.host}`);
    dropper.on('open', () => {
      this.setDropper(dropper)
      setTimeout(() => {
        if (this.loading) this.toggleLoading();
      }, 2000)
    })
  },
}