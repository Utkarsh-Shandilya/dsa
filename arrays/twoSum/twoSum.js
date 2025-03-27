/*
Two Sum Problem
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers that add up to `target`.

Input:
nums = [2, 7, 11, 15], target = 9

Output:
[0, 1]

Explanation:
nums[0] + nums[1] = 2 + 7 = 9
*/

/**
 * Find indices of two numbers that add up to target.
 * 
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @returns {number[]} Indices of the two numbers
 */
function twoSum(nums, target) {
    if (!Array.isArray(nums) || nums.length < 2 || typeof target !== 'number') {
        throw new Error('Invalid input: nums must be an array of length >= 2 and target must be a number');
    }

    const numMap = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) return [numMap.get(complement), i];
        numMap.set(nums[i], i);
    }

    return [];
}
