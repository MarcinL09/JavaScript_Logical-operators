// Write the getName function
function getName(name) {
    return name || 'Jan Kowalski';
}
getName('Adam'); // 'Adam'
getName(); // 'Jan Kowalski;
console.log(getName());

// Write the isTeenageAge function.

function isTeenageAge(age) {
    return age >= 13 && age < 20;
}

let teenage = isTeenageAge(10); // false
teenage = isTeenageAge(15); // true
teenage = isTeenageAge(20); // false
console.log(teenage);

// Write the isNotNull function
function isNotNull(value) {
    return value !== null;
}
let isNull = isNotNull(null); // false
isNull = isNotNull(true); // true
console.log(isNull);

// Use the round brackets () to change the true || false && false statement to return false.
function changeTheStatement() {
    return (true || false) && false;
}
console.log(changeTheStatement())

// write the canCarGoRight function.
function canCarGoRight(
    isMainLightGreen,
    isTheConditionalRightTurnLightOn,
    didTheCarStop
) {
    return isMainLightGreen || (isTheConditionalRightTurnLightOn && didTheCarStop);
}
const carGoRight = canCarGoRight(false, true, true)
console.log(carGoRight);

// Write a function named setAlarm which receives two parameters. The first parameter, employed,
// is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
function isTheClockAlarmSet(isWorkDay, isDayOff){
   return isWorkDay && isDayOff;
}

let alarm = isTheClockAlarmSet(true, true);
alarm = isTheClockAlarmSet(false, true);
alarm = isTheClockAlarmSet(true, false);
alarm = isTheClockAlarmSet(false, false);
console.log(alarm);

// Create a function close_compare that accepts 3 parameters: a, b, and an optional margin.
// The function should return whether a is lower than, close to, or higher than b.
// a is considered "close to" b if margin is greater than or equal to the distance between a and b.

function isInRange(a, b, range) {
    if (!range) {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        if (a === b) {
            return 0;
        }
    } else {
        if (Math.abs(a - b) <= range || a === b) {
            return 0;
        }
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
    }
}

const inRange = isInRange(3,5,3);
const inRangetwo = isInRange(3,5,0);
console.log(inRange);
console.log(inRangetwo);

// Boolean logic from scratch

// or(true, false) || (false, true) || (true, true) should return true
// or(false, false) should return false
function or(a, b) {
    if (!a && !b) {
        return false;
    }
    return true;
}
console.log(or(true, true));
// xor(true, true) || (false, false) should return false
// xor(false, true) || (true, false) should return true
function xor(a, b) {
    if (!a && !b) {
        return false;
    } else if (a && b) {
        return false;
    }
    return true;
}

console.log(xor(false, true));

// Create a function called _if which takes 3 arguments: a boolean value bool
// and 2 functions (which do not take any parameters): func1 and func2
// When bool is truth-ish, func1 should be called, otherwise call the func2.

function _if(boolean, functionFirst, functionSecond) {
    if (boolean === true) {
        return functionFirst(console.log("True"));
    }
    return functionSecond(console.log("false"));
}

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
// Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).
function rentalCarCost(days) {
    if (days >= 7) {
        return days * 40 - 50;
    } else if (days >= 3) {
        return days * 40 - 20;
    }
    return days * 40;
}

const cost = rentalCarCost(2);
console.log(cost);

// Write a function that given a floor in the american system returns the floor in the european system.

function getRealFloor(n) {
    if (n >= 0 && n <= 1) {
        return 0;
    } else if (n > 1 && n < 13) {
        return n - 1;
    } else if ( n > 13) {
        return n - 2;
    }
    return n;
}
const realFloor = getRealFloor(5);
console.log(realFloor);

// an extended version of the famous rock-paper-scissors game.

function rockPaperScissorsLizardSpockGame(playerOne, playerTwo) {
    if ((playerOne === 'Scissors' && playerTwo === 'Paper') ||
        (playerOne === 'Scissors' && playerTwo === 'Lizard') ||
        (playerOne === 'Paper' && playerTwo === 'Rock') ||
        (playerOne === 'Paper' && playerTwo === 'Spock') ||
        (playerOne === 'Rock' && playerTwo === 'Lizard') ||
        (playerOne === 'Rock' && playerTwo === 'Scissors') ||
        (playerOne === 'Lizard' && playerTwo === 'Spock') ||
        (playerOne === 'Lizard' && playerTwo === 'Paper') ||
        (playerOne === 'Spock' && playerTwo === 'Scissors') ||
        (playerOne === 'Spock' && playerTwo === 'Rock')) {
            return 'Player One Won!';
    } else if ((playerOne === 'Paper' && playerTwo === 'Scissors') ||
        (playerOne === 'Rock' && playerTwo === 'Paper') ||
        (playerOne === 'Lizard' && playerTwo === 'Rock') ||
        (playerOne === 'Spock' && playerTwo === 'Lizard') ||
        (playerOne === 'Scissors' && playerTwo === 'Spock') ||
        (playerOne === 'Lizard' && playerTwo === 'Scissors') ||
        (playerOne === 'Paper' && playerTwo === 'Lizard') ||
        (playerOne === 'Spock' && playerTwo === 'Paper') ||
        (playerOne === 'Rock' && playerTwo === 'Spock')  ||
        (playerOne === 'Scissors'&& playerTwo === 'Rock')) {
            return 'Player Two Won!'
    }
    return 'Draw!'
}
const game = rockPaperScissorsLizardSpockGame('Paper', 'Rock');
console.log(game);

// Scissors cuts Paper
// Paper covers Rock
// Rock crushes Lizard
// Lizard poisons Spock
// Spock smashes Scissors
// Scissors decapitates Lizard
// Lizard eats Paper
// Paper disproves Spock
// Spock vaporizes Rock
// Rock crushes Scissors
