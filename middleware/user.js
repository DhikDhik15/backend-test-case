'use strict';
const Member = require('../models/users');

exports.createMember = async add => {
    const newMember = await Member.create(add);
    return newMember
}

exports.update = async id => {
    const member = await Member.findById(id);
    await member.updateOne({
        status:1
    })
    return
}

exports.getMembers = async () => {
    const results = await Member.find()
    return results;
}