'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async list() {
        const { ctx, app } = this;
        let data = await this.service.productService.list();
        ctx.body = app.msg(0, '成功', data);
    }
    async screen() {
        const { ctx, app } = this;
        const { address, type, star, time } = ctx.request.body;
        let obj = { time, star, type };
        let screenData = {};
        Object.keys(obj).filter(val => {
            if (obj[val] !== '') {
                screenData[val] = obj[val];
            }
        })
        let data = await this.service.productService.find(screenData);
        if (address) {
            data = data.filter(val => val.address.indexOf(address) !== -1);
        }
        ctx.body = app.msg(0, '成功', data);
    }
    async detail() {
        const { ctx, app } = this;
        const { product_id } = ctx.request.body;
        let data = await this.service.productService.detail(product_id);
        ctx.body = app.msg(0, '成功', data);
    }
}

module.exports = HomeController;
