import 'isomorphic-fetch';
import methods from 'methods';

methods.forEach(function(method){
  exports[method] = function (path) {
    const url = __SERVER__ ? `http://localhost:3000${path}` : (__ANDROID__ ? `http://192.168.178.184:3000${path}` : path);
    return fetch(url, {method}).then(res => res.json());
  }
});
