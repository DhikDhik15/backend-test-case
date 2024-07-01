const express = require('express');
const app = express();

module.exports = function (app) {
    const member = require('../controllers/users');
    const books = require('../controllers/books')
    const transactions = require('../controllers/transactions')
    const algoritma = require('../controllers/algoritma')

    app.route('/register').post(member.createUser);
    app.route('/member').get(member.getMembers);

    app.route('/add-book').post(books.createBook);
    app.route('/book').get(books.getBooks)
    app.route('/borrow').post(transactions.borrow);

    app.route('/book-return/:id').get(transactions.return);

    // --------TESTS ALGORITMA ----------------
    app.route('/switch-word').get(algoritma.switch);
    app.route('/long-word').get(algoritma.long);
    app.route('/input-query').get(algoritma.inputQuery);
    app.route('/matrix').get(algoritma.matrix);
}