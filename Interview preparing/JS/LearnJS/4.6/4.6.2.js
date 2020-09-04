'use strict';

function Calculator() {
    return {
        read() {
            let firstNum = prompt("first number", 0);
            this.first = +firstNum;
            let secondNum = prompt("first number", 0);
            this.second = +secondNum;
        },
        sum() {
            if (!("first" in this)) {
                return 0;
            } else {
                return this.first + this.second;
            }
        },
        mul() {
            if (!("first" in this)) {
                return 1;
            } else {
                return this.first * this.second;
            }
        }
    }
}