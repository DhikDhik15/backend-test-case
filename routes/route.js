const express = require('express');
const app = express();

module.exports = function (app) {
    const member = require('../controllers/users');
    const books = require('../controllers/books')
    const transactions = require('../controllers/transactions')

    app.route('/book-rent/register').post(member.createUser);
    app.route('/book-rent/add-book').post(books.createBook);
    app.route('/book-rent/borrow').post(transactions.borrow);

    app.route('/book-return/:id').get(transactions.return);
}