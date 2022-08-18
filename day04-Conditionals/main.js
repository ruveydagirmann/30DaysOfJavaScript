//Day 4: Exercises


//level 1

//ex01

let age = Number(prompt("yaşınızı girin : "));
let value = (18 - age);

(age >= 18) ? (console.log("You are old enough to drive.")) : console.log(`You are left with ${value} years to drive.`);

//ex02

let age1 = Number(prompt("myage : "));
let age2 = Number(prompt("yourage : "));
let difference = Math.abs(age1 - age2)

if(age1 > age2)
	console.log(`You are ${difference} years older than me`);
else if (age1 < age2)
	console.log(`You are ${difference} years younger than me`);
else
	console.log("your ages are equal");


//ex03

let a = Number(prompt("a :"));
let b = Number(prompt("b :"));

(a > b) ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is lower than ${b}`);


//ex04

let number = Number(prompt("sayı : "));

(number % 2 == 0) ? console.log(`${number} is an even number`): console.log(`${number} is an odd number`);

//Level 2

//ex01

let score = Number(prompt("notunuzu girin : "));

if(score > 80){
	console.log("A")
}
else if(score < 80 && score > 70){
	console.log("B");
}
else if(score < 60 && score > 50){
	console.log("C");
}
else if(score < 50 && score > 40){
	console.log("D");
}
else
	console.log("F");

//ex02

let month = String(prompt("ay : "));

if(month == "September" || month == "October" || month == "November")
	console.log("The season is autumn");
else if(month == "December" || month == "January" || month == "February")
	console.log("The season is Winter.");
else if(month == "March" || month == "April" || month == "May")
	console.log("The season is Spring.");
else if(month == "June" || month == "July" || month == "August")
	console.log("The season is Summer");

//ex03

let day = String(prompt("gün :"));

if(day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday")
	console.log(`${day} is a working day.`);
else
console.log(`${day} is a weekend.`);


//Level 3

//ex01

let month = String(prompt("ay : "));

 if(month == "January" || month == "March" || month == "May" || month == "July" || month == "September" || month == "November")
 	console.log(`${month} has 31 days.`);
 else if(month == "April" || month == "June" || month == "August" || month == "October" || month == "December")
 	console.log(`${month} has 30 days.`);
 else
 	console.log(`${month} has 28 or 29 days`);

