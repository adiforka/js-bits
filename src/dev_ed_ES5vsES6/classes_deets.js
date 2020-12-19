// OLD (explicitly prototype-based)
var Person = function(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfo = function() {
    console.log(this.name + " : " + this.age);
}

var person1 = new Person('Jimmy', 35);
person1.showInfo();

// define a different object and then set a prototype for it:
var Miner = function(experience, yearsToRetirement, name, age) {
    // call "super" constructor (don't forget to define "this")
    Person.call(this, name, age);
    this.experience = experience;
    this.yearsToRetirement = yearsToRetirement;
}

// Miner.prototype = Object.create(Person.prototype);
// OR this:
Object.setPrototypeOf(Miner.prototype, Person.prototype);

var miner = new Miner(15, 20, 'James', 35);
miner.showInfo();
console.log(miner.experience);
console.log(miner.yearsToRetirement);

// ES6 (explicitly class-based, implicitly still prototype-based)

class ShoppingListHolder {
    constructor(items) {
        this.items = items;
    }

    getList() {
        return this.items;
    }

    getListSize() {
        return this.items.length;
    }
}


const holder = new ShoppingListHolder(['carrot', 'jigsaw', 'apple pie', 'kitchen cabinet']);
const listItems = holder.getList();
const listSize = holder.getListSize();
console.log(`List includes: ${listItems}, and is of size ${listSize}`);


class PricedShoppingListHolder extends ShoppingListHolder {
    constructor(items) {
        super(items);
        this.amount = items.length;
        this.cost = items.length * 2;
    }
}

// sorry it's a bit messy, using shorthand here
const pricedHolder = new PricedShoppingListHolder(holder.getList());
const listCost = pricedHolder.cost;
console.log(`list cost is ${listCost}`);
console.log(pricedHolder.getList());

