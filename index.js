// Write the getName function
function getName(name) {
    return name || 'Jan Kowalski';
}
getName('Adam'); // 'Adam'
getName(); // 'Jan Kowalski;
console.log(getName());

// Write the isTeenageAge function.

function isTeenageAge(age) {
    return  age >= 13 && age < 20;
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
    didTheCarStop) {
    return isMainLightGreen || (isTheConditionalRightTurnLightOn && didTheCarStop);
}
const carGoRight = canCarGoRight(false, true, true)
console.log(carGoRight);

// Write a function named setAlarm which receives two parameters. The first parameter, employed,
// is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.
function setClockAlarm(workDay, dayOff){
   return workDay && dayOff;
}

let alarm = setAlarm(true, true);
alarm = setAlarm(false, true);
alarm = setAlarm(true, false);
alarm = setAlarm(false, false);
console.log(alarm);

