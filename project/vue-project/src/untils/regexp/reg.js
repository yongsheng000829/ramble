import Vue from 'vue';
let { $message } = Vue.prototype;

const reg = {
    password: /^[a-zA-Z0-9]{4,23}$/,
    user: /^[a-zA-Z0-9]{4,23}$/,
    email: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
    age: /^[0-9]$/
}

export function regType(arr, next) {
    let resArr = arr.filter(val => !reg[val.name].test(val.value));
    if (resArr.length) {
        $message.error(resArr[0].str + '不合法');
        return false;
    }
    next();
}



export function isNull(arr, next) {
    let resArr = arr.filter(val => val.value === '');
    if (resArr.length) {
        $message.error(resArr[0].str + '不能为空');
        return false;
    }
    next();
}

export function dataJson(value, str, name) {
    return { value, str, name };
}