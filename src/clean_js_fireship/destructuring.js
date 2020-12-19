// fireship
const turtle = {
    name: 'Bob',
    legs: 4,
    shell: true,
    type: 'amphibious',
    meal: 10,
    diet: 'berries'
};

// destructure obj in the arg
function feed({ name, meal, diet }) {
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

const feedResult = feed(turtle);
console.log(feedResult);

// destructure in the body of the function
function feedAlt(animal) {
    const { name, meal, diet } = animal;
    return `Feed ${name} ${meal} kilos of ${diet}`;
}

const feedResultAlt = feedAlt(turtle);
console.log(feedResultAlt);

