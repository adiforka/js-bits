// basic countdown

// iterative
function countDown(n) {
    for (let i = 0; i < n; i++) {
        console.log(`${i}: Counting`);
    }
    console.log('Done!');
}
countDown(10);


// recursive
function countDownRecursive(n) {
    if (n === 10) {
        console.log('Done!');
        return;
    }
    console.log(`${n}: Counting`);
    return countDownRecursive(n + 1);
}
countDownRecursive(0);


// sum range

// iterative
function sumRange(n) {
    let total = 0;
    for (let i = n; i > 0; i--) {
        total += i;
    }
    return total;
}
console.log(sumRange(10));


// recursive
function sumRangeRecursive(n, total = 0) {
    if (n === 0) return total;
    return sumRangeRecursive(n - 1, total + n);
}
console.log(sumRangeRecursive(10));


// useful recursion
const familyTree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Lyle', children: [] },
                { name: 'Maria', children: [] }
            ]
        }
    ]
};
function printChildren(tree) {
    if (tree.children.length === 0) return;
    tree.children.forEach((child) => {
        console.log(child.name);
        printChildren(child);
    });
}
printChildren(familyTree);