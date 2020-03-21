import Vue from 'vue'
import { http, httpScuress } from './axios';
import { getCookie, setCookie, rmCookie } from './cookie';
import { isNull, regType, dataJson } from './regexp/reg';
import getDate from './getDate';
import './fonts/_flaticon.scss';           //icon图标
Vue.prototype.$http = http;                //二次封装axios
Vue.prototype.$getDate = getDate           //获取日期的方法
Vue.prototype.$setCookie = setCookie;      //设置cookie
Vue.prototype.$getCookie = getCookie;      //获取cookie
Vue.prototype.$rmCookie = rmCookie;        //删除cookie
Vue.prototype.$dataJson = dataJson;        //生成对象格式的数据
Vue.prototype.$isNull = isNull;            //非空校验
Vue.prototype.$regType = regType;          //正则
Vue.prototype.$httpScuress = httpScuress;  //升级版axios