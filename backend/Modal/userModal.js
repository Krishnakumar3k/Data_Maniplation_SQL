const connection = require('../db/dbconnection');

const userModel = {
    findByEmail: (email, callback) => {
        connection.query("SELECT * FROM users WHERE email = ?", [email], callback);
    },

    createUser: (userData, callback) => {
        connection.query("INSERT INTO users SET ?", userData, callback);
    }
};

module.exports = userModel;
