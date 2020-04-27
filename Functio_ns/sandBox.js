/****DECLARACION DE FUNCIONES****/
/* function greet(){
  console.log('Hello There');
} */

/****EXPRESION DE FUNCIONES****/
/* const speak = function (){
  console.log ('Good Day');
}; */

//speak();
//greet();

/*****ARGUMENTOS Y PARAMETROS*****/
/* const speak = function(name, word = 'funciones'){
  console.log(`Aprendiendo ${word} ${name}`);
}

speak('Eduardo'); */

/*****DEVOLVIENDO VALORES*****/
/* const calcArea = function(radius){
  return 3.14 * radius ** 2;
};
const area = calcArea(5);
console.log(area);
 */

/*****FUNCIONES FLECHA*****/
/* const calcArea = (radius) => 3.14 * radius ** 2;

const area = calcArea(5);
console.log("area is:", area); */

//Practicando funciones flecha 

/* const greet = function(){
  return 'hello, world';
} */

/* const greet = () => "hello, world"; */

/* const bill = function (products, tax) {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
}; */

/* const bill = (products, tax) => {
  let total = 0;
  for (let i = 0; i < products.length; i++) {
    total += products[i] + products[i] * tax;
  }
  return total;
};

console.log(greet());
console.log(bill([10, 15, 30], 0.2));
*/


/******FUNCIONES Y METODOS*******/
/* const name = 'Eduardo';
//Funcion
const greet = () => 'Hello';
let resultOne = greet();
console.log(resultOne);

//Métodos
let resultTwo = name.toUpperCase();
console.log(resultTwo); */

/******CALLBACKS AND FOREACH******/
/* const myFunc = (callbackFunc) => {
  let value= 50;
  callbackFunc(value);
};

myFunc(function (value){
  console.log(value);
}); */

let people = ['Sansa', 'Jaimie', 'Cersei', 'Robert', 'Ned'];

const logPerson = (person, index) => {
  console.log(`${index} - Hello ${person}`);
}

people.forEach(logPerson);