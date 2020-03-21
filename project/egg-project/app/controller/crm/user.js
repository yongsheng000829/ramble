'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');

class HomeController extends Controller {
    async login() {
        const { ctx, app } = this;
        const { user, password } = ctx.request.body;
        let findRes = await this.service.crmService.userService.find(user);
        if (!findRes.length) {
            ctx.body = app.msg(1, '用户名不存在'); return;
        }
        if (findRes[0].password !== password) {
            ctx.body = app.msg(1, '密码错误'); return;
        }
        let data = {
            ...findRes[0],
            loginTime: new Date().getTime()
        };
        ctx.cookies.set('crmToken', jwt.sign(data, 'crm'));
        ctx.body = app.msg(0, '登陆成功'); return;
    }
    async list() {
        const { ctx, app } = this;
        let data = await this.service.crmService.userService.list();
        ctx.body = app.msg(0, '获取职员列表成功', data);
    }
    async black() {
        const { ctx, app } = this;
        const { user_id } = ctx.request.body;
        let blackRes = await this.service.crmService.userService.black(user_id);
        if (blackRes.affectedRows === 1) {
            let data = await this.service.crmService.userService.list();
            ctx.body = app.msg(0, '拉黑用户成功', data);
        }
    }
    async add() {
        const { ctx, app } = this;
        const { obj } = ctx.request.body;
        obj.createtime = new Date(obj.createtime).getTime();
        obj.subtime = new Date().getTime();
        obj.intime = new Date().getTime();
        obj.outtime = null;
        let insertRes = await this.service.crmService.userService.add(obj);
        if (insertRes.affectedRows === 1) {
            ctx.body = app.msg(0, '添加职员成功'); return;
        }
        ctx.body = app.msg(1, '添加职员失败');
    }
    async search() {
        const { ctx, app } = this;
        const { sex, user } = ctx.request.body;
        let data = await this.service.crmService.userService.list();
        if (sex) {
            data = await this.service.crmService.userService.searchSex(sex);
        }
        if (user) {
            data = data.filter(val => val.user.includes(user));
        }
        ctx.body = app.msg(0, '筛选职员成功', data);
    }
    async updata() {
        const { ctx, app } = this;
        const { obj } = ctx.request.body;
        obj.createtime = new Date(obj.createtime).getTime();
        obj.subtime = new Date().getTime();
        let upDataRes = await this.service.crmService.userService.upData(obj);
        if (upDataRes.affectedRows === 1) {
            ctx.body = app.msg(0, '更新职员信息成功'); return;
        }
        ctx.body = app.msg(1, '更新职员信息失败');
    }
}

module.exports = HomeController;
