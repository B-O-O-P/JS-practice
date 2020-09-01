'use strict';

function LCS(x, y) {
    const m = x.length;
    const n = y.length;

    const lcsDP = Array(m + 1).fill(null).map(_ => Array(n + 1).fill(''));

    for (let i = 1; i <= x.length; i++) {
        for (let j = 1; j <= y.length; j++) {
            if (x[i - 1] === y[j - 1]) {
                lcsDP[i][j] = lcsDP[i - 1][j - 1] + x[i - 1];
            } else {
                lcsDP[i][j] = lcsDP[i - 1][j].length > lcsDP[i][j - 1].length ? lcsDP[i - 1][j] : lcsDP[i][j - 1];
            }
        }
    }

    return lcsDP[m][n];
}

console.log(LCS("a", "b"), "");
console.log(LCS("abcdef", "abc"), "abc");