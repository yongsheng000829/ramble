'use strict';

const Controller = require('egg').Controller;
const jwt = require('jsonwebtoken');


class HomeController extends Controller {
    async login() {
        const { ctx } = this;
        const { user, password } = ctx.request.body;
        const res = await this.service.user.find(user);
        if (res.length === 0) {
            ctx.body = { code: 1, msg: '登陆失败，账号不存在' }; return;
        }
        if (res[0].status == 2) {
            ctx.body = { code: 1, msg: '用户已过期' }; return;
        }
        if (res[0].password != password) {
            ctx.body = { code: 1, msg: '登陆失败，密码错误' }; return;
        }
        let obj = jwt.sign({
            ...res[0],
            loginTime: new Date().getTime()
        }, 'web');
        ctx.cookies.set('webToken', obj);
        ctx.body = { code: 0, msg: '登陆成功' };
    }
    async register() {
        const { ctx } = this;
        const { user, password, email, age } = ctx.request.body;
        const res = await this.service.user.find(user);
        if (res.length) {
            ctx.body = { code: 1, msg: '注册失败，用户名已经存在' }; return;
        }
        let insertRes = await this.service.user.add({ user, password, email, age });
        if (insertRes.affectedRows === 1) {
            ctx.body = { code: 0, msg: '注册成功' };
        }
    }
    async list() {
        const { ctx, app } = this;
        let res = await this.service.user.list();
        ctx.body = app.msg(0, '获取web用户列表成功', res);
    }
    async black() {
        const { ctx, app } = this;
        const { user_id } = ctx.request.body;
        let blackRes = await this.service.user.black(user_id);
        if (blackRes.affectedRows === 1) {
            let data = await this.service.user.list();
            ctx.body = app.msg(0, '加入黑名单成功', data); return;
        }
        ctx.body = app.msg(1, '加入黑名单失败');
    }
}

module.exports = HomeController;