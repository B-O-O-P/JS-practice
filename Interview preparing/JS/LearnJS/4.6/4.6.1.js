'use strict';

const def = {};

function A() { return def }
function B() { return def }

let a = new A;
let b = new B;

console.log( a == b ); // true