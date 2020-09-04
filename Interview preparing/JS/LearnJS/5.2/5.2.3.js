'use strict';

function readNumber() {
    let num;

    while (!isFinite(num)) {
        num = prompt("Input: ", 0);

        if (num === null || num === '') {
            return null;
        }
    }

    return num;
}