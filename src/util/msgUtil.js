Date.prototype.Format = function(e) {
  var t = e,
    n = {
      'y+': this.getFullYear(),
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'H+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      S: this.getMilliseconds(),
      'h+': this.getHours() % 12,
      a: this.getHours() / 12 <= 1 ? 'AM' : 'PM'
    };
  for (var i in n) {
    if (new RegExp('(' + i + ')').test(t)) {
      for (var r = '', o = 0; o < RegExp.$1.length; o++) r += '0';
      var a =
        1 == RegExp.$1.length ? n[i] : (r + n[i]).substring(('' + n[i]).length);
      t = t.replace(RegExp.$1, a);
    }
  }
  return t;
};
import axios from 'axios';
import qs from 'qs';

// axios 配置
axios.defaults.timeout = 10000000;
axios.defaults.transformRequest = [(data,config)=>{
  if(!config['Content-Type']) return qs.stringify(data);
  switch(config['Content-Type'].toLowerCase()) {
  case 'application/json;charset=utf-8': {
    return JSON.stringify(data);
  }
  case 'multipart/form-data;charset=utf-8': {
    return data;
  }
  default: {
    return qs.stringify(data);
  }
  }
}]
/**
 * 请求之前可以做什么
 */
// axios.interceptors.request.use(
//   config => {
//     //post请求序列化
//     if (config.method === 'post') {
//       config.data = qs.stringify(config.data);
//     }
//     return config; //添加这一行
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

/**
 * 返回拦截，可以做些什么
 */
axios.interceptors.response.use(
  res => {
    if (res.status === 200) {
      return Promise.resolve(res.data);
    }
  },
  error => {
    return Promise.reject(error);
  }
);
export const $http = {
  fetch: (url, params = {}) => {
    return new Promise((resolve, reject) => {
      axios
        .get(url, {
          params: params
        })
        .then(response => {
          resolve(response);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  post: (url, data = {}, config) => {
    return new Promise((resolve, reject) => {
      axios.post(url, data, config || {}).then(
        response => {
          resolve(response);
        },
        err => {
          reject(err);
        }
      );
    });
  }
};
export const openWS = option => {
  if (!option.url) return;
  let ws = new WebSocket(option.url);
  ws.onerror = err => {
    if (option.onError && typeof option.onError == 'function') {
      option.onError(err);
      return;
    }
    this.$msg.show({
      type: 'error',
      content: 'websocket已断开连接'
    });
  };
  ws.onopen = () => {
    if (option.onOpen && typeof option.onOpen == 'function') {
      option.onOpen();
      return;
    }
    console.log('websocket opended.');
  };
  ws.onmessage = e => {
    if (option.onMessage && typeof option.onMessage == 'function') {
      option.onMessage(JSON.parse(e.data));
    }
  };
};
export const getFormData = param => {
  let data = new FormData();
  if(!param) return data;
  for(let key in param) {
    data.append(key,param[key]);
  }
  return data;
}