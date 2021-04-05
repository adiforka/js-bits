// how is this not a spread operator: well, it does a different thing, it accesses the arguments as an array, so you
// don't have to get an array from 'arguments' first by converting that to an array
function addWithRest(...nums) {
    console.log(nums);
}

addWithRest(4, 4, 3, 6, 3, 2, 45);

function addWithArguments(nums) {
    const argHolder = [];
    for (const item of arguments) {
        argHolder.push(item);
    }
    console.log(argHolder);
}

addWithArguments(4, 4, 3, 6, 3, 2, 45);