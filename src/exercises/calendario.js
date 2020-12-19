import Prompt from "prompt-sync";

const prompt = Prompt({ sigint: true });


function printMonth(m, y) {
    printMonthHeader(m, y);
    printMonthBody(m, y);
}


function printMonthHeader(m, y) {
    const monthName = getMonthName(m);
    console.log(`        ::${monthName} ${y}::`);
    console.log(`SUN  MON  TUE  WED  THU  FRI  SAT`);
}


function printMonthBody(m, y) {
    const startDay = getStartDay(m, y);

    // set up print caret
    let prtStr = '';
    for (let i = 0; i < startDay; i++) {
        prtStr += '     ';
    }

    let printed = 0;
    for (let i = 1; i <= getNumberOfDaysInMonth(m); i++) {
        if ((startDay + printed) % 7 === 0) {
            prtStr += formatDayForPrint(i);
            console.log(prtStr);
            prtStr = '';
        } else {
            prtStr += formatDayForPrint(i);
        }
        printed++;
    }
    // print the remainder of the days
    console.log(prtStr);
}


function formatDayForPrint(day) {
    return `${day < 10 ? ('0' + day) : day}   `;
}


function getMonthName(m) {
    switch (m) {
        case 1: return 'January';
        case 2: return 'February';
        case 3: return 'March';
        case 4: return 'April';
        case 5: return 'May';
        case 6: return 'June';
        case 7: return 'July';
        case 8: return 'August';
        case 9: return 'September';
        case 10: return 'October';
        case 11: return 'November';
        case 12: return 'December';
        default: throw new Error('Invalid month');
    }
}


function getStartDay(m, y) {
    let totalDays = 3; // 1800 jan 1 ---> wednesday
    const firstYear = 1800;

    for (let i = firstYear; i < y; i++) {
        totalDays += isLeapYear(i) ? 366 : 365;
    }

    for (let i = 1; i < m; i++) {
        totalDays += getNumberOfDaysInMonth(i, y);
    }
    return totalDays % 7;
}


function isLeapYear(y) {
    return y % 4 === 0 && y % 100 !== 0 || y % 400 === 0;
}


function getNumberOfDaysInMonth(m, y) {
    switch (m) {
        case 1, 3, 5, 7, 8, 10, 12: return 31;
        case 4, 6, 9, 11: return 30;
        case 2: return isLeapYear(y) ? 29 : 28;
    }
}

const month = +prompt(`Enter month, value 1-12: `);
const year = +prompt(`Enter year, value 1800+: `);
printMonth(month, year);









