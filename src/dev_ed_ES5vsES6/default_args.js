// OLD
function multiply(x, y) {
    var a = x || 1;
    var b = y || 1;
    console.log(a * b);
}

multiply();

// ES6
const add = (a = 0, b = 0) => {
    console.log(a + b);
};

add(1, 4);
add();

// passing an expression as default arg
let isEqualTo = function(num1, num2 = num1 + 12) {
    return num1 == num2;
}



// using first arg as default value for second arg
isEqualTo = function(num1, num2 = num1) {
    //using coercion on purpose
    return num1 == num2;
}
