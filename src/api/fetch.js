//原生
import axios from "axios";
import store from "../vuex/store";
import router from "../Router/index"

// url
axios.defaults.baseURL = ''
// 请求超时时间
axios.defaults.timeout = 5 * 1000
// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 请求拦截器
axios.interceptors.request.use(
    config => {
      const token = store.state.token
      token && (config.headers.Authorization = token);

      return config
    },
    error => {
      return Promise.error(error)
    }
)
// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response)
    } else {
      return Promise.resolve(response)
    }
  },
  error => {
    if (error.response.status) {
        switch (error.response.status) {
            // 401: 未登录
            case 401:
                router.push("/login")
                break;

            // 403 token过期
            case 403:
                this.$message.error({
                    message: '登录过期，请重新登录',
                    duration: 1000
                });
                store.state.token = null
                setTimeout(()=>{
                    router.replace('/login')
                },1000)
                break;

            // 404 请求不存在
            case 404:
                this.$message.error({
                    message: '网络请求不存在',
                    duration: 1000
                });
                break;

            //剩余状态
            default:
                this.$message.error({
                    message: error.response.message,
                    duration: 1000
                });
        }
        return Promise.reject(error.response)
    }
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url,params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params:params})
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url,params){
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data)
            })
            .catch(err => {
                reject(err.data)
            })
    })
}