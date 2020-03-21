'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async list() {
        const { ctx, app } = this;
        let data = await this.service.crmService.roleService.list();
        ctx.body = app.msg(0, '获取角色数据成功', data);
    }
    async remove() {
        const { ctx, app } = this;
        const { role_id } = ctx.request.body;
        let userRes = await this.service.crmService.userService.findRole(role_id);
        if (userRes.length) {
            ctx.body = app.msg(1, '删除失败,此角色正在被使用'); return;
        }
        let roleDelRes = await this.service.crmService.roleService.remove(role_id);
        if (roleDelRes.affectedRows === 1) {
            let menuDelRes = await this.service.crmService.menu.remove(role_id);
            let data = await this.service.crmService.roleService.list();
            ctx.body = app.msg(0, '删除角色成功', data);
        }
    }
    async add() {
        const { ctx, app } = this;
        const { role, arr } = ctx.request.body;
        let findRes = await this.service.crmService.roleService.find(role);
        if (findRes.length) {
            ctx.body = app.msg(1, '添加失败，此身份已经存在'); return;
        }
        let roleAddRes = await this.service.crmService.roleService.add(role);
        if (roleAddRes.res.affectedRows === 1) {
            let { role_id } = roleAddRes;
            arr.forEach(async item => this.service.crmService.menu.add(item, role_id));
            ctx.body = app.msg(0, '添加角色成功');
        }
    }
    async menu() {
        const { ctx, app } = this;
        const { role_id } = ctx.request.body;
        let data = await this.service.crmService.menu.find(role_id);
        ctx.body = app.msg(0, '获取身份列表成功', data);
    }
    async treelist() {
        const { ctx, app } = this;
        let menu = app.config.menu;
        let data = [];
        Object.keys(menu).forEach(k => {
            let value = menu[k];
            let index = data.findIndex(item => item.class === value.class);
            let obj = { title: value.title, key: k };
            if (index !== -1) {
                data[index].children.push(obj); return;
            }
            data.push(
                {
                    title: value.class,
                    class: value.class,
                    key: 'sub' + k,
                    children: [obj]
                }
            )
        })
        ctx.body = app.msg(0, '', data);
    }
}

module.exports = HomeController;
