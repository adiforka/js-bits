"use strict";

const getValueForNthFibNumber = function (sequenceIndex) {
    if (sequenceIndex < 1) return 'index must be > 0. sequence starts with 1.'

    let current = 1;
    let previous = 1;
    let prePrevious = 0;

    for (let i = 2; i <= sequenceIndex; i++) {
        current = prePrevious + previous;
        prePrevious = previous;
        previous = current;
    }
    return current;
};

let index = 12;
const value = getValueForNthFibNumber(index);

console.log(`Element ${index} of the Fibonacci sequence is ${value}`);

// 1 1 2 3 5 8 13 21 34 55