import axios from 'axios';
import Vue from 'vue';
let { $message } = Vue.prototype;

let http = (method, url, data = {}) => {
    let val = method === 'get' ? 'params' : 'data';
    let obj = {
        method, url,
        headers: {
            source: 'web'
        }
    };
    obj[val] = data;
    return axios(obj).catch(error => {
        if (error.response.status === 404) {
            alert('404');
        }
    })
}

let httpScuress = async (method, url, value = {}, callBack, errorBack) => {
    let res = await http(method, url, value);
    let { code, msg, data } = res.data;
    if (code === 0) {
        if (!callBack) {
            $message.success(msg); return;
        }
        callBack(code, msg, data); return;
    }
    if (!errorBack) {
        $message.error(msg); return;
    }
    errorBack();
}

export { httpScuress, http };

