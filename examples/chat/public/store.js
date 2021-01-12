
export default new Vuex.Store({
  state: {
    loading: true,
    dropper: null,
    user: {
      username: '',
      id: '',
      picture: ''
    }
  },
  mutations: {
    toggleLoading(state) {
      state.loading = !state.loading
    },
    updateUsername(state, value) {
      state.user.username = value;
    },
    setDropper(state, dropper) {
      state.dropper = dropper;
    },
    updateUser(state) {
      const pictureString = state.user.username.split(" ").join("+");
      state.user.id = state.dropper.uuid;
      state.user.picture = "https://ui-avatars.com/api/?name="+pictureString+"&bold=true&background=242424&color=fffff"
    }
  }
})