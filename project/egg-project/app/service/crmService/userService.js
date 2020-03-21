const Service = require('egg').Service;

class ServiceMysql extends Service {
    async find(user) {
        return this.app.mysql.select('up_user', { where: { user } });
    }
    async list() {
        return this.app.mysql.select('up_user', { where: { status: 1 } });
    }
    async findRole(role_id) {
        return this.app.mysql.select('up_user', { where: { role_id } });
    }
    async black(user_id) {
        let data = await this.app.mysql.select('up_user', { where: { user_id } });
        data[0].status = 2;
        return await this.app.mysql.update('up_user', data[0], { where: { user_id } });

    }
    async add(obj) {
        return this.app.mysql.insert('up_user', obj);
    }
    async searchSex(sex) {
        return this.app.mysql.select('up_user', { where: { sex, status: 1 } });
    }
    async upData(obj) {
        return this.app.mysql.update('up_user', obj, { where: { user_id: obj.user_id } })
    }
}

module.exports = ServiceMysql;