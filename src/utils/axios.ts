import axios from 'axios'
//import { ElMessage } from 'element-plus'
//import config from '~/config'
import { localGet1 } from './index'


const request = axios.create({
    timeout: 5000
})
// 后端没有区分测试和正式
//axios.defaults.baseURL = config[import.meta.env.MODE].baseUrl
request.defaults.baseURL = '//backend-api-02.newbee.ltd/manage-api/v1' // 测试接口域名
// 携带 cookie，对目前的项目没有什么作用
request.defaults.withCredentials = true

request.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
request.defaults.headers['token'] = localGet1('token') || ''
// 默认 post 请求，使用 application/json 形式
request.defaults.headers.post['Content-Type'] = 'application/json'




request.interceptors.response.use(
    response => {
        return response.data;
    }, error => {
        let message:string = "";
        alert({
            type: "errType",
            message,
        });
        //返回失败的 promise 对象，来终结 promise 链
        return Promise.reject(error);
    } );

export default request;