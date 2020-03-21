'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    const { onData } = ctx.request.body;
    let { user_id } = ctx.info;
    onData.user_id = user_id;
    onData.date = new Date().getTime();
    let res = await this.service.person.add(onData);
    res.affectedRows === 1 ? ctx.body = app.msg(0, '成功') : ctx.body = app.msg(1, '失败');
  }
  async list() {
    const { ctx, app } = this;
    let res = await this.service.person.list();
    ctx.body = app.msg(0, '旅游意向数据', res);
  }
}

module.exports = HomeController;
