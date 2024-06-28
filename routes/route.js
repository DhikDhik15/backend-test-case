const express = require('express');
const app = express();

module.exports = function (app) {
    const member = require('../controllers/users');
    const books = require('../controllers/books')

    app.route('/book-rent/register').post(member.createUser);
    app.route('/book-rent/add-book').post(books.createBook);
}