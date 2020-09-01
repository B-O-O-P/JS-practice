'use strict';

function solve(s){
    let countLower = 0, countUpper = 0;
    for (let i = 0; i < s.length; ++i) {
        if (s[i] >= 'a' && s[i] <= 'z') {
            countLower++;
        } else {
            countUpper++;
        }
    }

    return countUpper > countLower ? s.toUpperCase() : s.toLowerCase();
}

console.log(solve("code"),"code");
console.log(solve("CODe"),"CODE");
console.log(solve("COde"),"code");
console.log(solve("Code"),"code");