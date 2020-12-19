function add(...nums) {
    let total = nums.reduce((currentTotal, currentValue) => currentTotal + currentValue);
    console.log(total);
}

add(4, 5, 6, 7, 8, 12);