function promisify(func) {
    return function (...args) {
        return new Promise(((resolve, reject) => {
            function callback(err, result) {
                if (err) {
                    return reject(err);
                } else {
                    return resolve(result);
                }
            }

            args.push(callback);

            func.call(this, ...args);
        }))
    }
}
