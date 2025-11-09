/*
Assignment on JavaScript
Write 22 Expressions or More Involving the operators 
such that the answers are provided in the console.


*/

// 1. + Addition
let a = 1;
let b = 2;
let c = 3;
let d = 4;

const addNum = a + b + c + d;
console.log(addNum); // 10

// 2. - Subtraction
const substractNum = d - a;
console.log(substractNum); // 3

// 3. * Multiplication
const multipyNum = a * b * d;
console.log(multipyNum); // 8

// 4. / Division
const divideNum = d / b;
console.log(divideNum); // 2

// 5. % Modulus (remainder)
const numReminder = d % c;
console.log(numReminder); // 1

// 6. ** Exponentiation
const numExpo = c ** 4;
console.log(numExpo); // 81

// 7. = Assignment
let firstName;

firstName = "Babatunde";
console.log(firstName); // Babatunde

// 8. += Add and assign
let singleScore = 10;
let doubleScore = 20;

doubleScore += singleScore;
// i.e doubleScore = doubleScore + singleScore

console.log(doubleScore); // 30

// 9. -= Subtract and assign
let firstScore = 10;
let secondScore = 20;

firstScore -= secondScore;
// i.e firstScore = firstScore - secondScore

console.log(firstScore); // -10

// 10. *= Multiply and assign
firstScore *= secondScore;
// i.e firstScore = firstScore - secondScore

console.log(firstScore); // -200

// 11. /= Divide and assign
firstScore /= secondScore;
// i.e firstScore = firstScore - secondScore

console.log(firstScore); // -10

// 12. == Equal to
let result;

result = a == b;
console.log(result); // false

// 13. === Strictly equal (same value and type)
result = a === b;
console.log(result); // false

// 14. != Not equal to
result = a != b;
console.log(result); // true

// 15. !== Strictly not equal
result = a !== b;
console.log(result); // true

// 16. > Greater than
result = a > b;
console.log(result); // false

// 17. < Less than
result = a < b;
console.log(result); // true

// 18. >= Greater than or equal to
result = a >= b;
console.log(result); // false

// 19. <= Less than or equal to
result = a <= b;
console.log(result); // true

// 20. && Logical AND
result = a && b;
console.log(result); // 2

// 21. || Logical OR
result = a || b;
console.log(result); // 1

// 22. ! Logical NOT
result = !false;
console.log(result); // true
