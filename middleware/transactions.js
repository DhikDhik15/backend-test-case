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

exports.return = async (member, books) => {
    const transactions = await Transactions.find({
        user_id: member
    })

    for (const book in books) {
        if (books.hasOwnProperty(book)) {
            const id = books[book].id;
            const dataBook = await Book.findById(id);
            if (transactions[0].book_id[0].id == id) {

                await dataBook.updateOne({
                    stock: dataBook.stock + 1
                })

                transactions.map(item => {
                    return {
                        ...item,
                        book_id: item.book_id.map(book => {
                            if (book.id === id) {
                                return { ...book, status:2}
                            }
                        })
                    };
                })
            }
        }
    }
}