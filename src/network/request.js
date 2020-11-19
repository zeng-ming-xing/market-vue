import Axios from "axios";

import axios from "axios"

//使用这种方法是需要传递config配置，成功的回调函数，失败的回调函数
//使用时   request(config,success,err)
// export function request(config, success, err) {
//     //1创建axios实例
//     const result = axios.create({
//         baseURL: "",
//         timeout: 5000
//     })
//axios的拦截器
//请求拦截
//result.interceptors.request.use(config=>{
//config是发送的请求，对拦截的请求进行处理之后必须返回config才能进行正常的请求
//一些用途
//1.可以判断config请求中是否含有某些不符合服务器的要求
//2.每次发送网路请求时可以在我们要显示数据的位置出现一个图标，等数据请求完成时在渲染到界面
//3.某些网络请求（token登录）,必须要携带一些特殊信息时
//return config
//}，err=>{此处为请求失败时的请求拦截
//})
//响应拦截
//result.interceptors.response.use(res=>{
//console.log(res);对返回的结果进行拦截

//}，err=>{
//此处为响应错误时进行响应拦截
//})
//     result(config).then(res => {
//         success(res);
//     }).catch(error => {
//         err(error)
//     })
// }
//也可以，在这里要传递配置参数，使用时request(config).then(res=>{}).catch(err=>{})
export function request(config) {
    const result = axios.create({
            baseURL: "",
            timeout: 5000
        })
        // result.interceptors.response.use(res => {
        //         console.log(res["data"]["data"]["banner"]);
        //     },
        //     err => {})
    return result(config)
}
//也可以通过es6 的promise来使用  
//使用时  request(config).then(res=>{}).catch(err=>{})
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         //1创建axios实例
//         const result = axios.create({
//             baseURL: "",
//             timeout: 5000
//         })
//         result(config).then(res => {
//             resolve(res);
//         }).catch(error => {
//             reject(error)
//         })
//     })

// }
