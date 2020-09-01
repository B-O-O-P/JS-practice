'use strict';

function lcs(x, y) {
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

console.log(lcs("", ""), "");
console.log(lcs("abc", ""), "");
console.log(lcs("", "abc"), "");
console.log(lcs("a", "b"), "");
console.log(lcs("a", "a"), "a");
console.log(lcs("abc", "ac"), "ac");
console.log(lcs("abcdef", "abc"), "abc");
console.log(lcs("abcdef", "acf"), "acf");
console.log(lcs("anothertest", "notatest"), "nottest");
console.log(lcs("132535365", "123456789"), "12356");
console.log(lcs("nothardlythefinaltest", "zzzfinallyzzz"), "final");
console.log(lcs("abcdefghijklmnopq", "apcdefghijklmnobq"), "acdefghijklmnoq");