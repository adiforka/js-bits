'use strict';

// ES6 (async code with Promises) avoid callback hell
const prom = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ user: 'Dude', password: '323rweftt34532rwer23asdefgeryh', props: [3, 4, 5]});

        reject(new Error('data not received'));
    }, 2000);
});

prom.then(data => console.log(data))
    .catch(err => console.log(err));
