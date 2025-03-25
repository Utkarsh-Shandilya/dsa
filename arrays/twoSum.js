/*
✅ Two Sum Problem
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers that add up to `target`.

📝 Input:
nums = [2, 7, 11, 15], target = 9

📢 Output:
[0, 1]

💡 Explanation:
nums[0] + nums[1] = 2 + 7 = 9
*/

/**
 * 🔎 Find indices of two numbers that add up to target.
 * 
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum
 * @returns {number[]} Indices of the two numbers
 */
function twoSum(nums, target) {
    // Create a map to store the indices of numbers
    const numMap = new Map();

    // Loop through the array to check for complement
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // Required number to reach target

        // Check if complement is already in the map
        if (numMap.has(complement)) {
            // Return indices if found
            return [numMap.get(complement), i];
        }

        // Store the current number's index in the map
        numMap.set(nums[i], i);
    }

    // Return empty array if no solution found
    return [];
}
