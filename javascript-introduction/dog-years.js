let myAge = 32;
// The first two years of a dog’s life count as 10.5 dog years each
// Each year following equates to 4 dog years
let earlyYears = 2;
earlyYears *= 10.5;
let laterYears = myAge -= 2;
laterYears *= 4;

let myAgeInDogYears = earlyYears + laterYears;
let myName = 'Aniko'.toLowerCase();
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);