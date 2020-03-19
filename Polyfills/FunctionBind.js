/*SIMPLE*/
if (!Function.prototype.bind) {
    Function.prototype.bind = function (scope) {
        var fn = this;
        return function () {
            return fn.apply(scope, arguments)
        }
    }
}

const user = {
    name: "IVAN",
};

function say() {
    console.log(this.name);
}

say();

say.bind(user)();

/*For currying and other things*/
Function.prototype.bind1 = function (scope) {
    let fn = this;
    let prefixArgs = Array.prototype.slice.call(arguments, 1);

    return function () {
        let suffixArgs = Array.prototype.slice.call(arguments);
        let args = prefixArgs.concat(suffixArgs);
        return fn.apply(scope, args)
    }
};
