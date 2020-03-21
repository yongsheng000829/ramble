const Service = require('egg').Service;

class UserService extends Service {
    async list() {
        return this.app.mysql.select('up_role');
    }
    async remove(role_id) {
        return this.app.mysql.delete('up_role', { role_id });
    }
    async find(role) {
        return this.app.mysql.select('up_role', { where: { role } });
    }
    async add(role) {
        let data = await this.app.mysql.select('up_role');
        let role_id = data.length + 1;
        let res = await this.app.mysql.insert('up_role', { role, role_id });
        return { res, role_id };
    }
}

module.exports = UserService;