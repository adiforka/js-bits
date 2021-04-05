export class Animal {
    #type;
    #legNumber;

    constructor(type, legNumber) {
        this.#type = type;
        this.#legNumber = legNumber;
    }

    vocalize(sound = 'Vvvvrrrrr') {
        console.log(sound);
    }

    get metaData() {
        return `Animal:: Type: ${this.#type}, Leg Number: ${this.#legNumber}`;
    }
}

export class Cat extends Animal {
    #hasTail;

    constructor(type, legNumber, hasTail) {
        super(type, legNumber);
        this.#hasTail = hasTail;
    }

    get metaData() {
        return `${super.metaData}, ${this.#hasTail}`;
    }


    }