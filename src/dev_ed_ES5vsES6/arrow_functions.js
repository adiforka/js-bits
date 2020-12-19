// OLD
var whoAreYou = function () {
    console.log('Hi, I\'m a dude');
};

whoAreYou();

// ES6
const sayLocation = location => console.log('Hi, I\'m in', location);


sayLocation('Wroclaw');

// 'this'
// OLD
var user = {
    name: 'Ed',
    age: 25,
    sayName: function () {
        // necessary to even nest functions this way???
        console.log('My name is ' + this.name);
        var that = this;
        // immediately invoked function
        (function () {
            console.log('My name is ' + that.name + ' and my age is ' + that.age);
        })();
    }
};
user.sayName();

// ES6
const userNew = {
    name: 'Johnny',
    age: 34,
    sayName: function() {
        console.log(`My name is ${this.name}`);
        const fullName = () => {
            console.log(`My name is ${this.name} and my age is ${this.age}`);
        }
        fullName();
    }
}

userNew.sayName();

// ES6 xample:
button.addEventListener('click', function() {
    var addFade = () => {
        // with an arrow function, the this inside of a function defined for an object (method) still refers to the 'this'
        // of the object
        this.style.display = 'none';
    };
})






