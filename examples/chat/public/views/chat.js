
export default {
  template: `
    <div class="flex p-10 w-screen h-screen justify-center items-center">
      <transition name="fade">
        <div v-show="!loading" class="flex w-full h-full sm:h-11/12 sm:w-1/3 flex-col border rounded text-center">
          <div class="flex px-10 py-5 border-b w-full items-center">
            <h2 class="font-bold text-sm text-gray-400">Chat example</h2>
          </div>
          <div class="flex-1">
            <div class="w-full h-full relative flex flex-col">
              <div ref='messagesContainer' class="overflow-auto text-left w-full bottom-0 max-h-full overflow-auto absolute mt-auto">
                <div class="px-5 mb-1 flex" v-for="(message, i) in messages" :key="message.owner.id+'_'+i">
                  <div :class="[i === messages.length - 1 ? 'mb-5' : '']" v-if="message.owner.id == user.id" class="max-w-full ml-auto text-white px-2 py-1 rounded-l-lg rounded-tr-lg bg-black">
                    {{message.text}}
                  </div>
                  <div :class="[i === messages.length - 1 ? 'mb-5' : '']" v-else class="max-w-full px-2 py-1 rounded-r-lg rounded-tl-lg bg-gray-200">
                    {{message.text}}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex px-10 py-5 border-t w-full items-center">
            <input @keyup.enter="sendMessage" v-model="currentMessage" class="min-w-0 font-bold flex-auto px-5 py-2 rounded mr-10" placeholder="Type a message..." type="text">
            <button @click="sendMessage" class="flex-auto px-5 py-2 rounded bg-gray-50">Send</button>
          </div>
        </div>
      </transition>
    </div>
  `,
  data() {
    return {
      currentMessage: '',
      messages: []
    }
  },
  methods: {
    ...Vuex.mapMutations(['toggleLoading']),
    async sendMessage() {
      if (!this.currentMessage) return;
      const dropper = this.dropper;
      const msg = {
        text: this.currentMessage,
        owner: this.user
      }
      await dropper.send('client_msg', msg)
      this.messages.push(msg)
      this.scrollDown()
      this.currentMessage = '';
    },
    scrollDown() {
      let container = this.$refs.messagesContainer
      setTimeout(() => container.scrollTop = container.scrollHeight, 100);
    },
  },
  computed: {
    ...Vuex.mapState(['loading', 'dropper', 'user']),
  },
  mounted() {
    if (!this.$store.state.user.username) this.$router.push({name: 'index'});
    if (this.loading) this.toggleLoading();
    const dropper = this.dropper;
    if (dropper) dropper.on('client_msg', msg => {
      let container = this.$refs.messagesContainer
      this.messages.push(msg)
      this.scrollDown()
    })
  },
}