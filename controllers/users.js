'use strict';

const User = require('../middleware/user')

exports.createUser = async (req, res) => {
    try {
        const add = {
            name: req.body.name,
            codeName: generateRandomString(4),
            status: 1,
        };

        function generateRandomString(length, characters) {
            let result = '';
            const chars = characters || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (let i = 0; i < length; i++) {
              result += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            return result;
        }

        const create = await User.createMember({
            ...add
        });

        res.status(200).json({
            status: true,
            message: 'registration member successfully',
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