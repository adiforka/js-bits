import { Animal, Cat } from './classes_deets.js';

const cat = new Animal('cat', 4);
console.log(cat.type);
console.log(cat.legNumber);
cat.vocalize('Meow');
console.log(cat.metaData);

const cat2 = new Cat('cat', 4, true);
console.log(cat2.metaData);
