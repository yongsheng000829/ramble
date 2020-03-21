const url = require('url');
const decode = require('../../config/untils/decode');

module.exports = options => {
    return async (ctx, next) => {
        let distUrl = url.parse(ctx.url).pathname
        if (options.includes(distUrl)) {
            await next(); return;
        }
        let key = ctx.get('source');
        let token = ctx.cookies.get(key + 'Token')
        if (!token) {
            ctx.body = ctx.app.msg(1, '暂未登陆'); return;
        }
        if (distUrl === '/login/out') {
            ctx.cookies.set(key + 'Token', null);
            ctx.body = ctx.app.msg(1, '退出登陆成功');
            return;
        }
        let type = key === 'crm' ? 'crmInfo' : 'info';
        try {
            ctx[type] = await decode(token, key);
        } catch{
            ctx.body = ctx.app.msg(1, '身份错误'); return;
        }
        let { loginTime } = ctx[type];
        if ((new Date().getTime() - loginTime) / 24 / 60 / 60 / 1000 >= 0.5) {
            ctx.body = ctx.app.msg(1, '登陆失效'); return;
        }
        await next();
    }
}