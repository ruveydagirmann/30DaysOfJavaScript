// //Day 3: Exercises

// //Level 1


// //ex01
// var firstName = "ruveyda";
// var lastName = "ağırman";
// var country = "turkey";
// var city = "istanbul";
// var age = 22;
// var isMarried = false;

// console.log(typeof firstName);
// console.log(typeof lastName);
// console.log(typeof country);
// console.log(typeof age);
// console.log(typeof isMarried);

// //ex02

// a = '10';
// b = String(10);

// console.log(typeof a);
// console.log(typeof b);

// //ex03
// console.log(parseFloat('9.8')); // not equal 10
// console.log(Math.ceil(9.8));

// //ex04

// let isTrue = 4 > 3    // true
// let isfalse = 4 < 3  // false

// console.log(isTrue);
// console.log(isfalse);

// //ex05

// console.log(4 > 3); // true
// console.log(4 >= 3); //true
// console.log(4 < 3); // false
// console.log(4 <= 3);//false
// console.log(4 == 4); //true
// console.log(4 === 4); //true
// console.log(4 == '4'); // true
// console.log(4 != 4);// false
// console.log(4 === '4') // false


// //ex06

// console.log((4 > 3) && (10 < 12)); //true
// console.log((4 > 3) && (10 > 12)); //false
// console.log((4 > 3) || (10 < 12)); //true
// console.log((4 > 3) || (10 > 12));//true
// console.log((!(4 > 3))); // false
// console.log((!(4 < 3))); //true
// console.log(!((4 > 3) && (10 > 12))); //true
// console.log(!(4 === '4')); //true


// //ex07

// const year = new Date();
// console.log(year.getFullYear());

// const month = new Date();
// console.log(month.getMonth());

// const date = new Date();
// console.log(date.getDate());

// const hours = new Date()
// console.log(hours.getHours());

// const min = new Date()
// console.log(min.getMinutes());

// const time = new Date() 
// console.log(time.getTime());

// //Level 2

// //ex01

// var base = prompt("tabanı giriniz : ");
// var height = prompt("yüksekliği giriniz : ");

// var result;
// result = (base * height) / 2 ;

// console.log(result);

// //ex02

// var side1 = Number(prompt("1. kenar : "));
// var side2 = Number(prompt("2. kenar : "));
// var side3 = Number(prompt("3. kenar :"));

// var res = (side1 + side2 + side3);
// console.log(res);

// //ex03
// var hgt = Number(prompt("uzunluk : "));
// var wgt = Number(prompt("genişlik : "));

// var area = (hgt * wgt);
// console.log(area);

// //ex04

// var pi = 3.14;
// var radius = Number(prompt("yarıçap :")); 
// var area = (pi * r * r);
// var surround = (2 * pi * r);
// console.log(area);
// console.log(surround);


// //ex05
// let x;
// let y;
// x = 0;
// y =((2 * x) - 2)
// if(x == 0)
//     console.log(y);
// y = 0;
// x = (y + 2) / 2;
// if(y == 0)
//     console.log(x);
// console.log("2");


// //ex06
// var x1, y1 ;
// x1 = 2;
// y1 = 2;
// var x2, y2 ;
// x2 = 6;
// y2 = 10;
// var gradient = Number((y2 - y1) / (x2 - x1));
// console.log(gradient);


// //ex07
// console.log("their slopes are equal");


// //ex08
// let x3;
// let y3 = 0;
// x3 = Math.sqrt(y3) - 3;
// console.log(x3);

// //ex09

// var hours = Number(prompt("kaç saat? :"));
// var perHour = Number(prompt("oran :"));

// console.log(hours * perHour);


// //ex10

// var name =String(prompt("isim : "));
// var length = name.length;
// console.log(length);
// if(length < 7)
// 	console.log("Kısa")
// else if(length > 7)
// 	console.log("uzun");
// else
// 	console.log("orta");

// //ex11

// let firstName = String(prompt("isim : "));
// let lastName = String(prompt("soyisim : "));

// let nameLenght = firstName.length;
// let lastLenght = lastName.length;

// (nameLenght  > lastLenght) ? console.log("Your first name, ruveyda is longer than your family name") 
// : (console.log("Your first name, ruveyda is not longer than your family name"));


// //ex12
// let myAge = Number(prompt("myage : "));
// let yourAge =  Number(prompt("yourAge : "));

// (myAge < yourAge) ? (console.log(`I am ${myAge} years younger than you.`))
// :  (console.log(`I am ${myAge} years older than you.`));


// //ex13

// let  birthYear = Number(prompt(" birth year : "));

// let Dates = new Date();
// let year = Dates.getFullYear();
// let age =  Number(year - birthYear);
// let licence = Number(18 - age);

// (age >= 18) ? (console.log(`You are ${age} years old. You are old enough to drive`)):
// (console.log(`You are ${age} years old.  You will be allowed to drive after ${licence} years.`));


// //ex14

// let session = Number(prompt("yıl giriniz :"));
// let second = (session * 31556926 );

// console.log(`You lived ${second} seconds.`);

// //ex15

// let time = new Date();

// let year = (time.getFullYear());
// let month = (time.getMonth());
// let date1 = (time.getDate());
// let hour = (time.getHours());
// let min = (time.getMinutes());

// console.log(`${year}-${month}-${date1} ${hour}:${min}`);
