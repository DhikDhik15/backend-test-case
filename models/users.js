const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    code: {
        type: String
    },
    status: {
        type: String
    }
},{
    timestamps: true
});
const members = mongoose.model("members", memberSchema);
module.exports = members;