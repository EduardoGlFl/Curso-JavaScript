/*********FOR LOOPS***********/

/* for (let i = 0; i < 5; i++){
  console.log('In loop:  ', i);
}
console.log('Loop Finish'); */

/* const authors = ['Leon', 'Charles', 'Albert'];
for(let i = 0; i < authors.length; i++){
  //console.log(authors[i]);
  let html = `<div>${authors[i]}</div>`;
  console.log(html);
}
 */

/********************WHILE LOOP********************/

/* let i = 0;
while (i < 5) {
  console.log("In loop", i);
  i++;
}
*/

/* const books = ["Paramo", "Centeno", "Cosaco"];
let i = 0;
while (i < books.length) {
  console.log(books[i]);
  i++;
} */

/******************DO WHILE LOOPS******************/
/* let i = 3;
do {
  console.log("Val of is: ", i);
  i++;
} while (i < 5);
 */

/******************IF STATEMENTS*****************/
/* const age = 25;
if (age > 20) {
  console.log("You are over 20 years old");
} */

/* const cars = ['ford', 'mazda', 'toyota', 'nissan'];

if(cars.length > 3){
  console.log("son muchos carros!");
} */

/* const password = 'p@ssword';

if(password.length >= 8){
  console.log('that password is long enough');
} */

/******************ELSE IF STATEMENTS********************/
/* const password = "p@sswORD123444";

if (password.length >= 12) {
  console.log("that password is mighty strong");
} else if (password.length >= 8) {
  console.log("that password is long enough");
} else {
  console.log("password should be at least 8 characters long");
} */

/**********************LOGICAL OPERATORS - OR || AND AND &&**************************/
/* const password = "p@ss12";

if (password.length >= 12 && password.includes("@")) {
  console.log("that password is mighty strong");
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length > 5)
) {
  console.log("that password is strong enough");
} else {
  console.log("that password is not strong enough");
}
 */

/**********************LOGICAL NOT**********************/


/* const user = true;

if (!user) {
  // do something
  console.log("DEBES INGRESAR PARA CONTINUAR");
}

console.log(!true);
console.log(!false);
 */

/**********************BREAK AND CONTINUE**********************/
/* const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
  if (scores[i] === 0) {
    continue;
  }

  console.log("your score:", scores[i]);

  if (scores[i] === 100) {
    console.log("congrats, you got the top score!");
    break;
  }
}
 */

/**********************SWITCH STATEMENTS**********************/
/* const grade = "F";

switch (grade) {
  case "A":
    console.log("OBTUVISTE UNA A!");
    break;
  case "B":
    console.log("OBTUVISTE UNA B!");
    break;
  case "C":
    console.log("OBTUVISTE UNA C!");
    break;
  case "D":
    console.log("OBTUVISTE UNA D!");
    break;
  case "E":
    console.log("OBTUVISTE UNA E!");
    break;
  default:
    console.log("CALIFICACION NO VALIDA");
}
 */
/**********************VARIABLES AND BLOCK SCOPE**********************/
//WATCH AGAIN THIS PART
let age = 20;

if (true) {
  // age = 40;
  let age = 40;
  let name = "Eduardo";
  console.log("inside 1st code block:", age, name);

  if (true) {
    let age = 50;
    console.log("inside 2nd code block:", age, name);
  }
}

console.log("outside code block:", age, name);