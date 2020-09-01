'use strict';

// n numbers of intervals
function lenCurve(n) {
    const intervalLength = 1 / n;
    const a = 0;
    const b = 1;
    const f = x => x * x;

    let result = 0;
    for (let i = a; i < b; i += intervalLength + Number.EPSILON) {
        const x1 = i, y1 = f(i);
        const x2 = i + intervalLength, y2 = f(x2);
        result += Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    }

    return Math.round((result + Number.EPSILON) * 1e9) / 1e9;
}

console.log(lenCurve(1), 1.414213562);
console.log(lenCurve(10), 1.478197397);
