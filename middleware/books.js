'use strict';
const Book = require('../models/books');

exports.createBook = async add => {
    const newBook = await Book.create(add);
    return newBook
}

exports.getBooks = async () => {
    const results = await Book.find().populate({
        path: 'transactions',
    });
    return results;
}