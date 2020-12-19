'use strict';
// OLD
console.log('start');

// non-blocking: it lets whatever code after it be executed and only runs when 2s passes (or some other pre-defined
// condition is met)
function getData(data, callback) {
    setTimeout(() => {
        console.log('reading from db');
        callback({ data: data });
    }, 2000);
}

getData([3, 4, 5], function(data) {
    console.log(data);
});

console.log('finish');

