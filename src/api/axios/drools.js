import request from './index.js';
import qs from 'qs'
// 2.获取手机验证码
function getEntieyCode(){
    return request({
        url: '/getEntity',
        method: 'get'
    })
}

function getDrl(id){
    return request({
        url: '/getDrl/'+id,
        method: 'get'
    })
}

function execute(data){
	return request({
	    url: '/execute',
	    method: 'post',
		data:JSON.parse(data)
		
	})
}
var funcs={
	getEntieyCode,
	execute,
	getDrl
}
export default funcs