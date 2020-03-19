Array.prototype.sum = function () {
    return Array.prototype.reduce.call(this, (acc, element) => acc + element, 0);
};

console.log([1,2,3,4,5,6].sum());

console.log([1,2,3].concat([4,5,6]).sum());

