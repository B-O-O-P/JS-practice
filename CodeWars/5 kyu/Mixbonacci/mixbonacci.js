'use strict';

const currentSequenceNumbers = {};
currentSequenceNumbers['fib'] = [0, 1];
currentSequenceNumbers['pad'] = [1, 0, 0];
currentSequenceNumbers['jac'] = [0, 1];
currentSequenceNumbers['pel'] = [0, 1];
currentSequenceNumbers['tri'] = [0, 0, 1];
currentSequenceNumbers['tet'] = [0, 0, 0, 1];

const nacciFunctions = {};

nacciFunctions['fib'] = (n1, n2) => n1 + n2;
nacciFunctions['pad'] = (n2, n3) => n2 + n3;
nacciFunctions['jac'] = (n1, n2) => n1 + 2 * n2;
nacciFunctions['pel'] = (n1, n2) => 2 * n1 + n2;
nacciFunctions['tri'] = (n1, n2, n3) => n1 + n2 + n3;
nacciFunctions['tet'] = (n1, n2, n3, n4) => n1 + n2 + n3 + n4;

function nextNacci(pattern) {
    const curSeq = currentSequenceNumbers[pattern];
    const curLen = curSeq.length;
    switch (pattern) {
        case 'fib':
            return nacciFunctions[pattern](curSeq[curLen - 1], curSeq[curLen - 2]);
        case 'pad':
            return nacciFunctions[pattern](curSeq[curLen - 2], curSeq[curLen - 3]);
        case 'jac':
            return nacciFunctions[pattern](curSeq[curLen - 1], curSeq[curLen - 2]);
        case 'pel':
            return nacciFunctions[pattern](curSeq[curLen - 1], curSeq[curLen - 2]);
        case 'tri':
            return nacciFunctions[pattern](curSeq[curLen - 1], curSeq[curLen - 2], curSeq[curLen - 3]);
        case 'tet':
            return nacciFunctions[pattern](curSeq[curLen - 1], curSeq[curLen - 2], curSeq[curLen - 3], curSeq[curLen - 4]);
        default:
            break;
    }
}

function currentNacci(pattern, currentSequenceIndex) {
    if (currentSequenceIndex[pattern] >= currentSequenceNumbers[pattern].length) {
        const counted = nextNacci(pattern);
        currentSequenceNumbers[pattern].push(counted);
        return currentNacci(pattern, currentSequenceIndex);
    } else {
        const current = currentSequenceIndex[pattern];
        currentSequenceIndex[pattern]++;
        return currentSequenceNumbers[pattern][current];
    }
}

function mixbonacci(pattern, length) {
    const currentSequenceIndex = {fib: 0, pad: 0, jac: 0, pel: 0, tri: 0, tet: 0};

    let current = 0;
    let currentPattern = 0;
    const result = [];

    if (pattern.length) {
        while (current < length) {
            result.push(currentNacci(pattern[currentPattern], currentSequenceIndex));
            current++;
            currentPattern = (currentPattern + 1) % pattern.length
        }
    }
    return result;
}

console.log(mixbonacci(['fib'], 0));
console.log(mixbonacci(['fib'], 10));
console.log(mixbonacci(['pad'], 10));
console.log(mixbonacci(['jac'], 10));
console.log(mixbonacci(['pel'], 10));
console.log(mixbonacci(['tri'], 10));
console.log(mixbonacci(['tet'], 10));
console.log(mixbonacci(['fib', 'tet'], 10));
console.log(mixbonacci(['jac', 'jac', 'pel'], 10));






