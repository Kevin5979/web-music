import axios from 'axios';

import {
  TIMEOUT,
  baseURL
} from "./config";

const instance = axios.create({
  timeout: TIMEOUT,
  baseURL: baseURL
})

axios.interceptors.request.use(config => {
  // 1.发送网络请求时，在页面中添加一个loading组件作为动画；

  // 2.某些网络请求要求用户必须登录，可以在请求中判断是否携带了token，没有携带token直接跳转到login页面；

  // 3.对某些请求参数进行序列化；
  return config;
}, err => {
  return err;
})

instance.interceptors.response.use(response => {
  return response.data;
}, err => {
  console.log(err)
})

export default instance;
