'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async list() {
        const { ctx, app } = this;
        let data = await this.service.blogService.list();
        let latelyArr = data.sort((x, y) => y.time - x.time).slice(0, 5);
        let tagsArr = data.map(val => val.tag);
        tagsArr = Array.from(new Set(tagsArr));
        ctx.body = app.msg(0, '成功', { data, latelyArr, tagsArr });
    }
    async search() {
        const { ctx, app } = this;
        let { value } = ctx.request.body;
        let data = await this.service.blogService.list();
        data = data.filter(val => val.title.indexOf(value) !== -1);
        ctx.body = app.msg(0, '成功', data);
    }
    async filter() {
        const { ctx, app } = this;
        let { tag, sortFlag, value } = ctx.request.body;
        let data;
        data = await this.service.blogService.list();
        if (tag) {
            data = await this.service.blogService.find(tag);
        }
        if (value) {
            data = data.filter(val => val.title.indexOf(value) !== -1);
        }
        if (sortFlag) {
            data = data.sort((x, y) => sortFlag === 's' ? x.time - y.time : y.time - x.time);
        }
        ctx.body = app.msg(0, '成功', data);
    }
}

module.exports = HomeController;
