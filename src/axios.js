import axios from 'axios';
import store from '@/store';

// 创建实例
const instance = axios.create({
  baseURL: 'https://mallapi.duyiedu.com/',
});

// 请求拦截器
instance.interceptors.request.use((config) => {
  if (config.url.includes('/passport')) { // 不需要appkey
    return config;
  }
  return {
    ...config,
    params: {
      ...config.params,
      appkey: store.state.user.appkey,
    },
  };
}, (error) => Promise.reject(error));

// 响应拦截器
instance.interceptors.response.use((response) => {
  if (response.data.status === 'fail') {
    // 错误则返回错误信息
    return Promise.reject(response.data.msg);
  }
  // 成功则返回信息
  return response.data.data;
}, (error) => Promise.reject(error));

// 导出
export default instance;
