import router from './router.js'
import store from './store.js'

// APP

new Vue({
  template: `
    <div>
      <transition name="fade">
        <loader v-show="loading"/>
      </transition>
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
  `,
  components: {
    Loader: () => import('./components/loader.js')
  },
  computed:{ 
    ...Vuex.mapState(['loading'])
  },
  router,
  store
}).$mount('#app');

// const dropper = new Dropper();

// dropper.on("open", () => {
//   console.log("Connected.");
//   dropper.send("Hello, world!"); // Simple send
//   dropper.send("crawford", {
//     // Custom event
//     name: "denyncrawford"
//   });
// });

// dropper.on("_all_", (ev) => {
//   console.log(ev);
// });

// dropper.on("handshake", (msg) => {
//   console.log(msg);
//   dropper.send("thanks", "From client");
// });

// dropper.on("crawford", (data) => {
//   // Catch custom event
//   console.log(data);
// });
