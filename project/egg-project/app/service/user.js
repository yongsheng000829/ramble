// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
    async find(user) {
        return this.app.mysql.select('user', { where: { user } });
    }
    async add(data) {
        return this.app.mysql.insert('user', data);
    }
    async list() {
        return this.app.mysql.select('user', { where: { status: 1 } });
    }
    async black(user_id) {
        let item = await this.app.mysql.select('user', { where: { user_id } });
        item[0].status = 2;
        return this.app.mysql.update('user', item[0], { where: { user_id } });
    }
}

module.exports = UserService;