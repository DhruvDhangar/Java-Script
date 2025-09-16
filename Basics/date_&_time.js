const varDate = new Date();

// This will provide same date value.
// console.log(varDate);
// console.log(varDate.toISOString());
// console.log(varDate.toJSON());

// console.log(varDate.toString());
// console.log(varDate.toDateString());

// console.log(varDate.toLocaleTimeString());
// console.log(varDate.toLocaleDateString());

// console.log(varDate.toLocaleString()); // this will provide date and time

let toDay = Date.now()

console.log(toDay);
console.log(Math.floor(toDay/1000));

let newDate = new Date('08-15-2025')
console.log(newDate.toLocaleString());
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); // 5 => friday

console.log(newDate.getVarDate);

console.log(newDate.toLocaleString('default', {
    weekday: 'long',
    day: '2-digit',
    timeZoneName: 'longGeneric'
}))