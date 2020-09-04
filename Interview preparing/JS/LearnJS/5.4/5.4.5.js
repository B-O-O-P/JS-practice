'use strict';

function getMaxSubSum(arr) {
    let sum = 0, maxSum = 0;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
        maxSum = Math.max(maxSum, sum);
        if (sum < 0) {
            sum = 0;
        }
    }

    return maxSum;
}