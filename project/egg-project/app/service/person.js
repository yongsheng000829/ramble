// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
    async add(onData) {
        return this.app.mysql.insert('person', onData);
    }
    async list() {
        return this.app.mysql.select('person');
    }
}

module.exports = UserService;