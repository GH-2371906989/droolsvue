import router from '@/router'
import {
	Message
} from 'element-ui'
import store from './store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import watermark from '@/utils/watermark'

router.beforeEach(async (to, from, next) => {
	NProgress.start()
	const init = window.sessionStorage.getItem("init")
	console.log(init)
	console.log(to)
	if (to.path === '/') {
		Message.warning('为您跳转至首页')
		next()
	} else {
		// 需要动态组装路由
		if (init == null ||	init == 'false') {
			await store.dispatch('app/generateRoutes')
			next(to.path)
		}else{
			console.log(router)
			next()
		}
		
	}
})

router.afterEach(() => {
	watermark.set('store.getters.username' + "-" + 'store.getters.usercode');
	NProgress.done()
})
