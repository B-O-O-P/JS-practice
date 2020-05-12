function add(start) {
    let sum = start;
    return function rec(value) {
        if (value) {
            sum += value;
            return rec;
        } else {
            return sum;
        }
    }
}

console.log(add(2)(5)(7)());

function addRest(...args) {
    let sum = args.reduce((acc, arg) => acc + arg, 0);

    return function rec(...args) {
        if (args.length) {
            sum += args.reduce((acc, arg) => acc + arg, 0);
            return rec;
        } else {
            return sum;
        }
    }
}

console.log(addRest(2, 1)(5)(5, 6)(1)(7, 1, 1)());

function addWithoutBraces(...args) {
    let sum = args.reduce((acc, arg) => acc + arg, 0);

    function rec(...args) {
        if (args.length) {
            sum += args.reduce((acc, arg) => acc + arg, 0);
            return rec;
        } else {
            return sum;
        }
    }

    rec.toString = function () {
        return sum;
    };

    return rec;
}


console.log(addWithoutBraces(2, 1)(5)(5, 6)(1)(7, 1, 1));
