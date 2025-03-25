/**
 *  Find indices of two numbers that add up to target.
 * 
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @returns {number[]} Indices of the two numbers
 */
function twoSum(nums: number[], target: number): number[] {
    if (!Array.isArray(nums) || nums.length < 2 || typeof target !== 'number') {
        throw new Error('Invalid input: nums must be an array of length >= 2 and target must be a number');
    }

    const numMap = new Map<number, number>();

    for (let i = 0; i < nums.length; i++) {
        const complement: number = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement)!, i];
        }
        numMap.set(nums[i], i);
    }

    return [];
}
