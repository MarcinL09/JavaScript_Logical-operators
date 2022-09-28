// Write the getName function
function getName(name) {
    return name || 'Jan Kowalski';
}
const firstName = getName('Adam'); // 'Adam'
const surname = getName(); // 'Jan Kowalski;
console.log(firstName);
console.log(surname);