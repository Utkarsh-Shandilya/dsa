const majorityElement = function (nums) {
    const majorityCount = Math.ceil(nums.length / 2);
    const memo = new Map();
    for (let item of nums) {
        const newCount = (memo.get(item) || 0) + 1;
        memo.set(item, newCount);
        if (newCount >= majorityCount) return item;
    }
};
