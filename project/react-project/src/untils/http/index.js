import axios from 'axios';

let http = (method, url, data = {}) => {
    let val = method === 'get' ? 'params' : 'data';
    let configObj = {
        method, url,
        headers: {
            source: 'crm'
        }
    };
    configObj[val] = data;
    return axios(configObj).catch(error => {
        let status = error.response.status;
        if (status === 404) {
            alert('接口找不到');
        }
        if (status === 500) {
            alert('服务器错误');
        }
    })
};


let upHttp = async (arr, callBack, errorBack) => {
    let res = arr[2] ? await http(...arr) : await http(arr[0], arr[1]);
    let { code, msg } = res.data;
    if (callBack && code === 0) {
        callBack(res.data); return;
    }
    if (!errorBack) {
        alert(msg); return;
    }
    errorBack(res.data);
};

export { http, upHttp };