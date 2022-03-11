import router, {
	routes
} from '@/router'
export default {
	namespaced: true,
	state: () => ({
		counter: 11
	}),
	mutations: {
		increment(state) {
			// ±ä¸ü×´Ì¬
			state.counter++
		}
	},
	actions: {
		generateRoutes({commit}) {
			new Promise(resolve => {
				const menus = [{
					path: '/editer',
					name: 'Editer',
					component: () => import('@/views/Editer')
				}]
				router.addRoutes(menus)
				window.sessionStorage.setItem('init',true);
				
				resolve()
			})
		}
	},
	getters: {

	}
}
