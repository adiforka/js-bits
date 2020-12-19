let obj;

const add = function(param1 = 0, ) {
   obj = {
        name: 'Dude',
    };
}

add();
console.log(`why is this printing ${obj.name}`);


// is this closure?
const value = 3;

function process() {
    console.log(value);
}

process();

