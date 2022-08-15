// Exercises


// Level 1

let challenge;

challenge = "30 days of javascript";

console.log(challenge);
console.log(challenge.length);
console.log(challenge.toLocaleUpperCase());
console.log(challenge.toLocaleLowerCase());
console.log(challenge.substring(0,2));
console.log(challenge.substring(2));
console.log(challenge.includes("days"));
console.log(challenge.split());
console.log(challenge.split(" "));


let value;
value = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' ;
console.log(value.split(","));

console.log(challenge.replace("javascript", "python"));

challenge = "30 days of javascript";

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(12));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let sentences;
sentences = 'You cannot end a sentence with because because because is a conjunction';
console.log(sentences.indexOf("because"));
console.log(sentences.lastIndexOf("because"));
console.log(sentences.search("because"));


console.log(challenge.trim(" "));

console.log(challenge.startsWith(3));
console.log(challenge.endsWith("t"));

console.log(challenge.match("a"));

let s1,s2;
s1 = "30 days of ";
s2 = "Javascript";

console.log(s1.concat(s2));

console.log(challenge.repeat(" ", 2));

//Level 2

console.log('There is no exercise better for the heart than reaching down and lifting people up.');
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

a = '10';
b = String(10);

console.log(typeof a);
console.log(typeof b);

console.log(parseFloat('9.8')); // not equal 10

console.log(Math.ceil(9.8));


c = "python";
d = "jargon";
console.log(Boolean(c.search("on")));
console.log(Boolean(d.search("on")));



console.log(Math.random() * 100);
console.log(Math.random() * 50 + 50);
console.log(Math.random() * 255);


console.log(1,Math.pow(1,0),Math.pow(1,1),Math.pow(1,3),Math.pow(1,4));
console.log(2,Math.pow(2,0),Math.pow(2,1),Math.pow(2,3),Math.pow(2,4));
console.log(3,Math.pow(3,0),Math.pow(3,1),Math.pow(3,3),Math.pow(3,4));
console.log(4,Math.pow(4,0),Math.pow(4,1),Math.pow(4,3),Math.pow(4,4));
console.log(5,Math.pow(5,0),Math.pow(5,1),Math.pow(5,3),Math.pow(5,4));

let x;
x = "You cannot end a sentence with because because because is a conjunction";

console.log(x.substr("because"));
console.log(x.match("because"));

// Level 3

let string , pattern;

string = "Love is the best thing in this world. Some found their love and some are still looking for their love." ;
pattern = /love/gi;
console.log(string.match(pattern));


let space = ' '
let firstName = 'Ruveyda'
let lastName = 'Ağırman'
let country = 'Turkey'
let city = 'İstanbul'
let age = 22;
let language = 'JavaScript'
let job = 'student'

let fullName = firstName + space + lastName ;
console.log(fullName);

let person1 = `I am ${fullName}. I am ${age}. I live in ${country}.`
console.log(person1);
