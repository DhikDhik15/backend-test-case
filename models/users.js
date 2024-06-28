const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    codeName: {
        type: String
    },
    status: {
        type: String,
        unique: true
    }
},{
    timestamps: true
});
const members = mongoose.model("members", memberSchema);
module.exports = members;