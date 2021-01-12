import Index from "./views/index.js";
import Chat from "./views/chat.js";

const routes = [
  {
    path: '/',
    component: Index,
    name: 'index'
  },
  {
    path: '/chat',
    component: Chat,
    name: 'chat'
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})