import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]
const createRouter = () => new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const router = createRouter()

window.sessionStorage.setItem('init',false);
export function resetRouter() {
  const newRouter = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
	scrollBehavior: () => ({y: 0}),
    routes
  })
  router.matcher = newRouter.matcher // reset router
}


export default router
