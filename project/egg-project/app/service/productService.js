// app/service/user.js
const Service = require('egg').Service;

class UserService extends Service {
    async list() {
        return this.app.mysql.select('product');
    }
    async find(val) {
        return this.app.mysql.select('product', { where: val });
    }
    async detail(product_id) {
        return this.app.mysql.select('product_detail_list', { where: { product_id } });
    }
}

module.exports = UserService;