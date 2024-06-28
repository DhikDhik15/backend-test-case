'use strict';

const Book = require('../middleware/books')

exports.createBook = async (req, res) => {
    try {
        const add = {
            title: req.body.title,
            code: req.body.code,
            author: req.body.author,
            stock: req.body.stock,
        };

        const create = await Book.createBook({
            ...add
        });

        res.status(200).json({
            status: true,
            message: 'add book successfully',
            data: create,
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: error,
            status: false,
        })
    }
}