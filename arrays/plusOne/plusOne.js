/*
Plus One Problem
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.
The digits are ordered from most significant to least significant in left-to-right order.
The large integer does not contain any leading 0's.

Input: digits = [1,2,3]

Output: [1,2,4]

Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
*/

/**
 * @param {number[]} digits - Array of integers
 * @returns {number[]} Array of integers
 */
var plusOne = function (digits) {
    if (!Array.isArray(digits) || digits.some(num => num < 0 || num > 9)) {
        throw new Error('Invalid input');
    }

    // Use BigInt only for large arrays to avoid overflow
    if (digits.length >= 15) {
        let num = BigInt(digits.join(''));
        num += 1n;
        return String(num).split('').map(digit => parseInt(digit, 10));
    }

    // Regular addition for small arrays
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }

    // If all digits were 9, add 1 at the beginning
    digits.unshift(1);
    return digits;
};
