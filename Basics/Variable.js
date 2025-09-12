const accountId = 123455;
let accountName = "Open";
var cityName = "Surat";

console.log(accountId);
console.table([accountId, accountName, cityName]);

// accountId = 1144

// Don't use var for the variable decalration.

console.log(accountId);
accountName = "Closed";
cityName = "Navsari";

let hello = true;

console.table([
  typeof accountId,
  typeof accountName,
  typeof cityName,
  typeof hello,
]);
