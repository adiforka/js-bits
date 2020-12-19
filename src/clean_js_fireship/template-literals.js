const horse = {
    name: 'Topher',
    size: 'large',
    skills: ['jousting', 'galloping'],
    age: 7
};

// good string code
const { name, size, skills, age } = horse;

const bio = `${name} is a ${size} horse skilled at ${skills.join(' & ')}. ${name} is ${age} years old.`;
console.log(bio);

// building strings in a functional way (tagged template literals)
function horseAge(strings, age) {
    const ageStr = age > 5 ? 'old' : 'young';
    return `${strings[0]}${ageStr} at ${age} years`;
}

const bio2 = horseAge`This horse is ${horse.age}`;
console.log(bio2);

// tagged template literals #2 with a loop for when we don't know how many args are going to be passed in
function formatTemplate(strings, ...args) {
    //could do additional conditions for the passed-in values
    let str = '';
    strings.forEach((string, i) => {
        // very cool to insert an empty string for every arg that's undefined (defensive and inline)
        str += string + (args[i] || '');
    });
    return str;
}

const dogName = 'Snickers';
const dogAge = '100';
const sentence = formatTemplate`My dog's name is ${dogName}, and he's ${dogAge} years old`;
console.log(sentence);

// example 2
function cleanTemplate(strings, ...args) {
    let str = '';
    strings.forEach((s, i) => {
        str += s + (args[i] || '');
    });
    return str;
}

const jimmy = { name: 'jimmy', age: 45 };
const { name: jimmysName, age: jimmysAge } = jimmy;
const formattedString = cleanTemplate`She was here and then she left ${jimmysName} alone at ${jimmysAge}.`;
console.log(formattedString);

