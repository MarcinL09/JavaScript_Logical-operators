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