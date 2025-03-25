/**
 * 🔎 Find indices of two numbers that add up to target.
 * 
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @returns {number[]} Indices of the two numbers
 */
function twoSum(nums: number[], target: number): number[] {
    const numMap = new Map<number, number>();

    // Loop through the array to check for complement
    for (let i = 0; i < nums.length; i++) {
        const complement: number = target - nums[i];

        // Check if complement is already in the map
        if (numMap.has(complement)) {
            // Return indices if found
            return [numMap.get(complement)!, i];
        }

        // Store the current number's index in the map
        numMap.set(nums[i], i);
    }

    // Return empty array if no solution found
    return [];
}
