//Day 4: Exercises

import {countries} from "./countries.js"

//level 1

//ex01
let arr = []
console.log(arr);

//ex02
let arr = [
	"ruveyda",
	"ağırman",
	"22",
	"başakşehir",
	"ytü"
]
console.log(arr);

//ex03
let arr = [
	"ruveyda",
	"ağırman",
	"22",
	"başakşehir",
	"ytü"
]
console.log(arr.length);

//ex04
let arr = [
	"ruveyda",
	"ağırman",
	"22",
	"başakşehir",
	"ytü"
]
console.log(arr[0]);
console.log(arr[Math.floor(arr.length / 2)]);
console.log(arr[arr.length - 1]);


//ex05
let MixedDataTypes = [
	"ruveyda",
	"22",
	"\0",
	"1",
	"0"
]
let MixedDataTypesLenght = MixedDataTypes.length;
console.log(MixedDataTypesLenght);


//ex06
let ItCompanies = [
	"Facebook",
	"Google",
	"Microsoft",
	"Apple",
	"IBM",
	"Oracle",
	"Amazon",
]

//ex07
console.log(ItCompanies); 

//ex08
let lenght = ItCompanies.length;
console.log(lenght);

//ex09
console.log(ItCompanies[0]);
console.log(ItCompanies[Math.floor(lenght / 2)]);
console.log(ItCompanies[lenght - 1]);

//ex10
ItCompanies.forEach(element => {
	console.log(element)
});


//ex11
ItCompanies.forEach(element => {
	console.log(element.toUpperCase());
});

//ex12
console.log(`${ItCompanies} are big IT companies.`);

//ex13
let company = prompt("şirket adı :");
function myfunc(company) {
	for(let i = 0 ; i < ItCompanies.length; i++)
	{
		if(company == ItCompanies[i])
		{	
			return(company);
		}	
	}
	return("not found");
}
console.log(myfunc(company));

//ex14
for(let i = 0; i < ItCompanies.length ; i++)
{
 for(let j = 0; j < ItCompanies[i].length ; j++)
 {
     if(ItCompanies[i][j] == "o")
     {
         for(j = j + 1; j < ItCompanies[i].length ; j++)
         {
             if(ItCompanies[i][j] == "o")
             {
                 let oo = [];
                 oo.push = ItCompanies[i];
                 console.log(oo);
             }
         }
     }
 }
}


//ex15
console.log(ItCompanies.sort());

//ex16
console.log(ItCompanies.reverse());

//ex17
console.log(ItCompanies.slice(0, 3));

//ex18
console.log(ItCompanies.slice(4))

//ex19
console.log(ItCompanies.slice(3, 4));

//ex20
ItCompanies.shift()
console.log(ItCompanies);

ex21
ItCompanies[Math.floor(ItCompanies.length / 2)]);
console.log(ItCompanies);

//ex22
ItCompanies.pop()
console.log(ItCompanies);

//ex23
ItCompanies.forEach(element => ItCompanies.splice(element))
	console.log(ItCompanies);


//Level 2

//ex02
let text = "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
let word;

text = text.replaceAll('.', '');
text = text.replaceAll(',', '');
console.log(text);

word = text.split(" ");
console.log(word);

console.log(word.length);


//ex03
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let add = prompt("food : ");
let alergic = prompt("alergic : ")


if(alergic == "yes")
	shoppingCart.pop("Honey");
if(add == "Meat")
	 shoppingCart.unshift("Meat");
else if(add == "Sugar")
	shoppingCart.push("Sugar");

console.log(shoppingCart);


//ex04
 const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Ethiopia',
  'Kenya'
 ];

if(countries.find( a => a  == 'Ethiopia') == 'Ethiopia')
 	console.log("ETHIOPIA");
else
 	countries.push('Ethiopia');
console.log(countries);


//ex05
const webTechs = [
	'HTML',
	'CSS',
	'JavaScript',
	'React',
	'Redux',
	'Node',
	'MongoDB'
  ]
  if(webTechs.find( a => a  == 'Sass') == 'Sass')
   	console.log("Sass is a CSS preprocess'");
  else
    	webTechs.push('Sass');
   console.log(webTechs);



//ex06
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack ;
fullStack = frontEnd.concat(backEnd);
console.log(fullStack);


//LEVEL 3

//ex01
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let sum = 0;

ages.forEach(function(element){
	sum += Number(element); 
 });

ages.sort();
console.log(ages);
console.log(ages[0]);
console.log(ages[ages.length - 1]);
console.log(ages[ages.length / 2]);
console.log(sum / (ages.length));
console.log(ages[ages.length - 1] - ages[0]);

//ex02
countries.splice(10);
console.log(countries);

countries[Math.floor(countries.length / 2) ]
console.log(countries[Math.floor(countries.length / 2) ]);


//ex03
((countries.length / 2) % 2 == 0) ? 
(countries.splice(countries.length / 2)): (countries.unshift("Turkey"))
console.log(countries);