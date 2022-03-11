import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)


const modulesFiles = require.context('./modules', true, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})

export default new Vuex.Store({
	getters,
	modules,
	plugins: [createPersistedState({
	  storage: window.sessionStorage,
	  reducer(val) {
	    return {
	      // 只储存state中的user
	      app: val.app,
	    }
	  }
	})]
})
