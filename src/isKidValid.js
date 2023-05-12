const { FACTORS } = require('./constants')

/**
 * Validates a KID number using modulus10 and test if checksum match the control digit
 *
 * @param {string} kidNumber A string of numbers from 1 to 25 characters
 * @return {Boolean} isValid
 *
 */
let isKidValid = ( kidNumber ) => {
    if (typeof kidNumber != 'string') {
        throw new Error('Parameter is not a string!');
    }

    if(kidNumber === "" || !/^[0-9]{1,25}$/g.test(kidNumber) ) {
        return false
    }

    let sum = 0;
    kidNumber.split("").reverse().slice(1, kidNumber.length).forEach((base, index) => {
        if (parseInt(base) * FACTORS[index] > 9 ) {
            sum = sum + ((parseInt(base) * FACTORS[index]) -9)
        } else {
            sum = sum + (parseInt(base) * FACTORS[index])
        }
    });

    let checkSum = 10 - (sum % 10);

    return checkSum === parseInt(kidNumber.split("").slice(-1));
};

module.exports = isKidValid
