"use strict";

let log = console.log;
let n = 10;
let i = 6;
log(n.toString(2), i.toString(2));

log(n & i);
log(n | i);
log(n ^ i);
log(~i);
log(~0b1010);

// Permissions
// read, write, delete
const read = 0b1;
const write = 0b10;
const del = 0b100;

// granting permissions
const user = read | write;

// checking permissions
const hasReadPermission = Boolean((user & read) === read);
const hasWritePermission = Boolean((user & write) === write);
const hasDeletePermission = Boolean((user & del) === del);

log(`user can read data: ${hasReadPermission};
user can write data: ${hasWritePermission};
user can delete data: ${hasDeletePermission}.`);


// Odd / Even
for (let i = 0; i < 50; i++) {
    if (i & 1) {
        log(`${i}: odd`);
    }
    else {
        log(`\t${i}: even`);
    }
}

// extracting colors with bitshift operators

// FF3300 -- 24bit values 8 bit red, 8bit green, 8 bit blue
// GREEN get at green by >> 8 to get rid of the blue, then AND 11111111 to get rid of the red

// 11111111 00100001 00000000 >> 8
// 11111111 00100001, then AND (00000000) 11111111 is
// 11111111 00100001 AND
// 00000000 11111111 gives us the value of the green as
// 00000000 00100001, which is just 100001, 33
const color = 0xFF3300;
log(`red green blue: ${color}`);
const redGreen = color >> 8;
log(`having eliminated the blue: ${redGreen.toString(2)}`);
const green = redGreen & 0b11111111;
log(`green value is ${green} in decimal, ${green.toString(16)} in hex`);