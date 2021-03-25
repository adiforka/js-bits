// data to work with
const students = [
    { name: 'Mary', score: 90, school: 'East' },
    { name: 'James', score: 100, school: 'East' },
    { name: 'Steve', score: 40, school: 'East' },
    { name: 'Gabe', score: 90, school: 'East' },
    { name: 'Rachel', score: 85, school: 'West' },
    { name: 'Rochelle', score: 95, school: 'East' },
    { name: 'Lynette', score: 75, school: 'West' }
];

// to get students from the East
const processStudents = function (data, callback) {
    for (item of data) {
        if (item.school.toLowerCase() === 'east') {
            if (typeof callback === 'function') {
                callback(item);
            }
        }
    }
};

// get passing students
processStudents(students, (obj) => {
    if (obj.score > 60) {
        console.log(obj.name + ' passed.');
    }
});

// get total points for East and number of students from East
const determineTotal = function () {
    let total = 0, count = 0;
    processStudents(students, (obj) => {
        total += obj.score;
        count++;
    });
    console.log('Total scores for East: ' + total);
    console.log('East student count: ' + count);
};

determineTotal();

