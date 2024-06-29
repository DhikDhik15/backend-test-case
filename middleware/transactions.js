'use strict';
const Transactions = require('../models/transactions');
const User = require('../models/users')
const Book = require('../models/books')

exports.createTransactions = async data => {
    const newTransactions = await Transactions.insertMany(data);
    return newTransactions
}

exports.checkMember = async id => {
    const check = await User.findById(id);
    return check
}

exports.updateStock = async books => {
    for (const book in books) {
        if (books.hasOwnProperty(book)) {
            const id = books[book].id;
            const result = await Book.findById(id);

            await result.updateOne({
                stock: result.stock - 1
            })
        }
    }

    return
}