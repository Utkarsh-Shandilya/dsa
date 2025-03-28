const partition = (arr, low, high) => {
    const pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
}

const quickSort = (arr, low = 0, high = arr.length - 1) => {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
    return arr;
}

const merge = function (nums1, m, nums2, n) {
    if (n === 0)
        return nums1;
    let j = 0;
    for (let i = m; i < nums1.length; i++) {
        nums1[i] = nums2[j];
        j++;
    }
    quickSort(nums1);
};