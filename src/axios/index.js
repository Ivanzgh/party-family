import axios from 'axios'
import router from "../router/index";
import store from "../store/index";

//创建一个axios实例
const instance = axios.create({
  baseURL: 'http://211.67.177.56:8080/hhdj',
  timeout: 15000,
  // headers: {
  //   'Authentication-Token': store.state.token
  // }
});

const xhr = {
  get(url, data, config) {
    return new Promise((resolve, reject) => {
      instance.get(url, {params: data}, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
  post(url, data, config) {
    return new Promise((resolve, reject) => {
      instance.post(url, data, config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  },
};

// instance.defaults.headers.common['token'] = store.state.token;

// 添加request请求拦截器
instance.interceptors.request.use(config => {
// 在发送请求之前做些什么
//判断是否存在token，如果存在将每个页面header都添加token
    if (store.state.token) {
      config.headers.common['token'] = store.state.token
    }
    return config;
  },
  error => {
// 对请求错误做些什么
    return Promise.reject(error);
  });

// http response 拦截器
instance.interceptors.response.use(response => {
    return response;
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          this.$store.commit('DEL_TOKEN');
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
          })
      }
    }
    return Promise.reject(error.response)
  });


export default xhr;
