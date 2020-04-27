/*Tipos de datos se utiliza let si el valor va a cambiar
let age = 25;
let year = 2019;

/*console.log(age, year);

age = 30;
console.log(age);

//El valor de la variable no cambia
const points = 100;
console.log(points);

//Antigua forma de declarar variables
var score = 75;
console.log(score);*/

/*****************************************************/
/*Strings
console.log("Hello world");

let email = "eduardo@gmail.com";
console.log(email);

//String concatenation
let firstName = "Robert";
let lastName = "DeNiro";
let fullName = firstName + ' ' + lastName;
console.log(fullName);

//Getting characters
console.log(fullName[0]);

//String Lenght
console.log(fullName.length);

//String Methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let index = email.indexOf('@');
console.log(index);*/

/******************************************/
//Common string methods
//let email = 'eduardoGlezFlores@hayabusa.com.mx';

//let result = email.lastIndexOf('d');
//let result = email.slice(0,10);
//let result = email.substr(4,10);
//let result = email.replace('u','y');
//let result = email.replace('d','t');
//console.log(result);

/*****************************************/

//let radius = 10;
//const pi = 3.14;

//console.log(radius,pi);

//Operandos Matemáticos +, -, *, /, **, %
//let result = radius % 3;
//let result = pi * radius**2;

//Orden de las operaciones
//let result = 5 * (10 - 3) ** 2;
//console.log(result);

//let likes = 10;

//likes ++;
//likes --;
//likes += 10;
//likes -= 5;
//likes *= 2;
//likes /= 2;
//console.log(likes);

//Concatenación de Números
/*let result = 'the blog has '+ likes + ' likes';
console.log(result);*/

/***************************************/
//Template strings
//const title = "El Extranjero";
//const author = "Albert Camus";
//const likes = 89;

//Concatenation way
//let result = 'El libro ' + title + ' de ' + author + ' tiene ' + likes + ' reseñas positivas.';
//console.log(result);

//Templeta string way "AltGr + } para backticks (acento grave)""
//let result = `El libro ${title} de ${author} tiene ${likes} reseñas positivas`;
//console.log(result);

//Creating HTML templates
/*let html = `<h2> ${title} </h2>
<p> ${author} </p>
<span> Este libro tiene ${likes} reseñas </span>
`;

console.log(html);*/

/************************ARRAYS**************************/
//let authors = ['Camus', 'Dostoyevski', 'Hesse'];

//authors[1] = 'Asimov';
//console.log(authors[1]);

//let ages = [46, 60, 85, 72];
//console.log(ages [2]);

/* let random = ['Extranjero', 'Crimen', 42, 60]; */
/* console.log(random); */

//console.log(authors.length);

/* ARRAY METHODS */

//let result = authors.join(', ');
//let result = authors.indexOf('Hesse');
//let result = authors.concat(['Asimov', 'Bukowski'])
//let result = authors.push('Bukowski');
//result = authors.pop();

//console.log(result);

/*********************NULL***************************/

/* let age = null; 
console.log(age, age + 3, `the age is ${age}`); */

/*******************BOOLEANS************************/
//Booleans and comparisons
//console.log(true, false);

//Methods can return booleans
//let email = "eduardoGlez@gmail.com";
//let names = ["Leo", "Albert", "Juan"];

//let result = email.includes('@');
//let result = names.includes('Salinger');
//console.log(result);

//Comparison operators
//let age = 65;

/* console.log(age == 65);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 65);
console.log(age >= 65); */

/* let name =  'shaun';

console.log(name == 'shaun');
console.log(name == 'Shaun');
console.log(name > 'crystal');
console.log(name > 'Shaun'); */


/*********************TYPE CONVERSION*******************/
let score = '100';

score = Number(score);
console.log(score+1);
console.log(typeof score); 

/*let result = String (50);
let result = Boolean(100);
let result = Boolean(0); 
let result = Boolean ('0'); 
console.log(result, typeof result); */