const LinkedList = require('./linked-list');

// definitely based on WebDevSimplified. Tweaked minimally to have getByIndex return a value, not a node. Affected
// methods updated.

const ll = LinkedList.fromValues(10, 20, 30, 40);

ll.removeAtIndex(2);

ll.print();
console.log(ll.length);

