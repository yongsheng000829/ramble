'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        const { ctx, app } = this;
        const { menu } = app.config;
        let { role_id } = ctx.crmInfo;
        let arr = await this.service.crmService.menu.find(role_id);
        arr = arr.map(val => menu[val.menu]);
        let resArr = [];
        arr.forEach(val => {
            let index = resArr.findIndex(item => item.class === val.class);
            if (index !== -1) {
                resArr[index].options.push({
                    ...val
                });
                return;
            };
            resArr.push({
                class: val.class,
                key: val.key,
                options: [
                    { ...val }
                ]
            })
        })
        ctx.body = app.msg(0, '获取左侧列表成功', resArr);
    }
}

module.exports = HomeController;
