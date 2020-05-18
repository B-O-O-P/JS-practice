'use strict';

Array.prototype.sum = function () {
    return Array.prototype.reduce.call(this, (acc, element) => acc + element, 0);
};

var countChange = function (money, coins) {
    let count = 0;

    const nextCoin = (coins, currentCombination) => {
        for (let i = 0; i < coins.length; ++i) {
            const newCombination = currentCombination.concat(coins[i])
            if (newCombination.sum() < money) {
                nextCoin(coins.slice(i), newCombination);
            } else if (newCombination.sum() === money) {
                count++;
            }
        }
    };

    nextCoin(coins, []);

    return count;
};

console.log(countChange(4, [1,2]), 3);
console.log(countChange(10, [5,2,3]), 4);
console.log(countChange(11, [5,7]), 0);
