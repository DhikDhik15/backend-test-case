'use strict';
const Member = require('../models/users');

exports.createMember = async add => {
    const newMember = await Member.create(add);
    return newMember
}