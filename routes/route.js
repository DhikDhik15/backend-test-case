const express = require('express');
const app = express();

module.exports = function (app) {
    const member = require('../controllers/users');

    app.route('/book-rent/register').post(member.createUser);
}