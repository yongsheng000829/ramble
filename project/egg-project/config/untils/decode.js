const jwt = require('jsonwebtoken');


module.exports = (code, key) => {
    return new Promise(res => {
        jwt.verify(code, key, (error, results) => {
            if (error) throw error;
            res(results);
        })
    })
}