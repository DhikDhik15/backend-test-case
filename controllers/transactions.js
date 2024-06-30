'use strict';

const Transactions = require('../middleware/transactions')
const User = require('../middleware/user')

exports.borrow = async (req, res) => {
    try {      
        const data = {
            user_id: req.body.user,
            book_id: req.body.books,
            date: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        };
    
        const books = data.book_id.length;
    
        // check member
        const check = await Transactions.checkMember(data.user_id);

        if (check != null && check.status != 3) {          
            // check count books
            if (books <= 2) {
                    const create = await Transactions.createTransactions({
                        ...data
                    });
                
                    await Transactions.updateStock({
                        ...data.book_id
                    });
                
                    await User.update(data.user_id)
    
                res.status(200).json({
                    status: true,
                    message: 'borrow successfully',
                    data: create,
                })
        
            } else {
                res.status(400).json({
                    status: false,
                    message: 'maximal 2 books',
                })
            }
        } else {
            res.status(404).json({
                status: false,
                message: 'member not found or penalized',
            })
        }
    } catch (error) {
        res.status(500).json({
            error: error,
            status: false,
        })
    }
}

exports.return = async (req, res) => {
    const user = req.params.id;
    const books = req.body.books;

    try {
        await Transactions.return(user, books)

        res.status(200).json({
            status: true,
            message: 'return successfully',
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            status: false,
        })
    }
}