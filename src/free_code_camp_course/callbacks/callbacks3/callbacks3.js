// Callback functions
// built-in callbacks
// setTimeout, Arr.forEach, geolocation.getCurrentPosition
// custom callbacks


// custom callback
function doThing(callback, name = 'stranger') {
    let x = 7;
    // code code code
    callback(name);
}

function hello(nm) {
    console.log(`Hello, ${nm}`);
}

doThing(hello, 'Charles');

//setTimeout (passing args to callback!)
setTimeout(hello, 2000, 'Bob');
