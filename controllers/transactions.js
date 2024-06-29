'use strict';

const Transactions = require('../middleware/transactions')

exports.borrow = async (req, res) => {
    try {      
        const data = {
            user_id: req.body.user,
            book_id: req.body.books,
        };
    
        const books = data.book_id.length;
    
        // check member
        const check = await Transactions.checkMember(data.user_id);

        if (check != null && check.status != 3) {          
            // check count books
            if (books <= 2) {
                    // const create = await Transactions.createTransactions({
                    //     ...data
                    // });
                
                const updateStock = await Transactions.updateStock({
                    ...data.book_id
                });
    
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
        }
    } catch (error) {
        res.status(500).json({
            error: error,
            status: false,
        })
    }
}