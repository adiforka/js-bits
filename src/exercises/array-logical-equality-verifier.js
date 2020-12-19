function checkArrays(list1, list2) {
    if (list1.length !== list2.length) return false;
    for (let i = 0; i < list1.length; i++) {
        if (!(list1.includes(list2[i]) && list2.includes(list1[i]))) {
            return false;
        }
    }
    return true;
}

let result = checkArrays([2, 1, 3], [1, 4, 3]);
console.log(result);

// with reduce
function checkArraysReduce(list1, list2) {
    const getCount = (list, value) => {
        return list.reduce((acc, cur) =>
            (value === cur ? 1 : 0) + acc, 0);
    };
    return list1.length === list2.length &&
        list1.reduce((acc, cur) => acc && getCount(list1, cur) === getCount(list2, cur), true);
}

