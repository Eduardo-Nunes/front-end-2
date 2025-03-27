const names = ["Classy","Heio","Mark","IRving","Kenny R",];

const third_name = names [2];

console.log (third_name);

names.push("Milchick");

names.unshift("Cobel");

console.log(names);

names.pop();

console.log(names);

const values = [2, 4, 6, 8];

const double_values = values.map(value => value * 2);

console.log(double_values);

const numbers = [1, 3, 5, 7, 9];

const plus_five = numbers.filter(number => number > 5);

console.log(plus_five);