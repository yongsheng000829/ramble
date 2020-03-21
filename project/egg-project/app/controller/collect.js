'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx, app } = this;
        let city = ['中国', '巴黎', '法国', '印度', '美国'];
        let day = ['1月', '2月', '3月', '4-12月'];
        let person = ['1人', '2人', '3人', '4人及以上'];
        ctx.body = app.msg(0, '成功', { city, day, person });
    }
}

module.exports = HomeController;
