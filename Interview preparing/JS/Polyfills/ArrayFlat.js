Array.prototype.flatt = function flatt() {
    return Array.prototype.reduce.call(this, function flatInto(acc, elem) {
        acc = Array.isArray(elem) ? acc.concat(flatt.call(elem)) : acc.concat(elem);
        return acc;
    }, []);
};

console.log(([1, [2, 3], 4, 5]).flatt());
//=> [ 1, 2, 3, 4, 5 ]
