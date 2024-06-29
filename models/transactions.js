const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    user_id: {
        type: String
    },
    book_id: {
        type: 'array',
        ref: 'book'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
},{
    timestamps: true
});
const transactions = mongoose.model("transactions", transactionSchema);
module.exports = transactions;