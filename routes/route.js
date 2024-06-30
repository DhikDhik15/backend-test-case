const express = require('express');
const app = express();

module.exports = function (app) {
    const member = require('../controllers/users');
    const books = require('../controllers/books')
    const transactions = require('../controllers/transactions')

    app.route('/register').post(member.createUser);
    app.route('/member').get(member.getMembers);

    app.route('/add-book').post(books.createBook);
    app.route('/book').get(books.getBooks)
    app.route('/borrow').post(transactions.borrow);

    app.route('/book-return/:id').get(transactions.return);
}