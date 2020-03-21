// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
    async list() {
        return this.app.mysql.select('blog');
    }
    async find(tag) {
        return this.app.mysql.select('blog', { where: { tag } });
    }
}

module.exports = UserService;