'use strict';

exports.switch = async (req, res) => {
    try {

        let reverse = await reverseAlphabet(req.body.word)

        function reverseAlphabet(input) {
            // Pisahkan alfabet dan angka
            let alphabetPart = '';
            let numberPart = '';
        
            for (let char of input) {
                if (/[a-zA-Z]/.test(char)) {
                    alphabetPart += char;
                } else {
                    numberPart += char;
                }
            }
        
            // Reverse alfabet
            let reversedAlphabet = alphabetPart.split('').reverse().join('');
        
            // Gabungkan kembali dengan angka
            let result = reversedAlphabet + numberPart;

            return result;
            
        }
        res.status(200).json({
            result: reverse,
        })

    } catch (error) {
        res.status(500).json({
            error: error,
            status: false,
        })
    }
}

exports.long = async (req, res) => {
    try {

        let result = await longWord(req.body.string)

        function longWord(string) {
            let words = string.split(" ");
            
            let long = "";
                    for (let word of words) {
                if (word.length > long.length) {
                    long = word;
                }
            }
        
            return long;
        }

        res.status(200).json({
            result: result,
        })

    } catch (error) {
        res.status(500).json({
            error: error,
            status: false,
        })
    }
}

exports.inputQuery = async function (req, res) { 
    try {
        let query = await {
            query: req.body.query
        };

        let input = await {
            input: req.body.input
        };
        
        let result = countQueryInInput(query.query, input.input);

        function countQueryInInput(INPUT, QUERY) {
            let frequencyMap = {};
            
            for (let word of INPUT) {
                if (frequencyMap[word] === undefined) {
                    frequencyMap[word] = 0;
                }
                frequencyMap[word]++;
            }
            
            let results = [];
            for (let word of QUERY) {
                if (frequencyMap[word] === undefined) {
                    results.push(0);
                } else {
                    results.push(frequencyMap[word]);
                }
            }
            
            return results;
        }

        res.status(200).json({
            result: result,
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            status: false,
        })
    }
}

exports.matrix = async function (req, res) { 
    try {
        let matrix = await [req.body.matrix];
        
        let result = diagonalDifference(matrix);

        function diagonalDifference(matrix) {
            let n = matrix.length;
            let diagonal1 = 0;
            let diagonal2 = 0;
        
            // Menghitung jumlah diagonal pertama dan diagonal kedua
            for (let i = 0; i < n; i++) {
                diagonal1 += matrix[i][i];
                diagonal2 += matrix[i][n - 1 - i];
            }
        
            // Menghitung selisih antara diagonal pertama dan diagonal kedua
            let difference = Math.abs(diagonal1 - diagonal2);
        
            return difference;
        }

        res.status(200).json({
            result: result,
        })
    } catch (error) {
        res.status(500).json({
            error: error,
            status: false,
        })
    }
}