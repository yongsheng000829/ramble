// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
    async find(role_id) {
        return this.app.mysql.select('up_menu', { where: { role_id } });
    }
    async remove(role_id) {
        return this.app.mysql.delete('up_menu', { role_id });
    }
    async add(menu, role_id) {
        return this.app.mysql.insert('up_menu', { menu, role_id });
    }
}

module.exports = UserService;