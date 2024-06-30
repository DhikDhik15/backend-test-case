const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    code: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    stock: {
        type: 'number',
    },
    transactions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'transactions'
    },
},{
    timestamps: true
});
const books = mongoose.model("books", bookSchema);
module.exports = books;