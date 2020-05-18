'use strict';

// Remember that sum of any two consecutive numbers is odd as one of them has to be even and other odd.
// 2^n = 2^n-1 + 2^n-1
const consecutiveDucks = (num) => ((num & (num - 1)) !== 0) && (num !== 0);

console.log(consecutiveDucks(0), true);
