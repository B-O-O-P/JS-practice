'use strict';

function exEuler(n) {
    let x = 0;
    let y = 1;
    const h = 1 / n;
    let sum = 0;

    const dyx = (x, y) => 2 - Math.exp(-4 * x) - 2 * y;
    const exact = (x) => 1 + 0.5 * Math.exp(-4 * x) - 0.5 * Math.exp(-2 * x);

    for (let i = 1; i <= n; ++i) {
        let d = dyx(x, y);
        x += h;
        y += h * d;
        let zk = exact(x);
        sum += Math.abs(y - zk) / zk;
    }

    return Math.floor((sum / (n + 1)) * 1e6) / 1e6;
}

console.log(exEuler(1), 0.5);
console.log(exEuler(10), 0.026314);
console.log(exEuler(17), 0.015193);
console.log(exEuler(50), 0.005073);
console.log(exEuler(100), 0.002524);