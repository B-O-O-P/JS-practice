'use strict';

function sumInput() {
    let current;
    const arr = [];

    while (true) {
        if (current !== null && current !== '' && !isFinite(current)) {
            if (current !== undefined) {
                current = prompt("Input:", 0);
            }
            arr.push(+current);
        } else {
            return arr.reduce((acc, elem) => acc + elem);
        }
    }
}