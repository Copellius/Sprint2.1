"use strict";

/*Ej 1.1*/

/*1*/
let add = (a, b) => a * b;

/*2*/
let randomNumber = () => Math.floor(Math.random() * 101);

/*3*/
class person {
  constructor(name) {
    this.name = name;
  }

  greet = () => console.log(`Hola, ${this.name}`);
}

/*4*/

const arrNumbers = [1, 2, 3, 4];

function printNumbers(numbers) {
  numbers.forEach((number) => console.log(number));
}

printNumbers(arrNumbers);

/*5*/

setTimeout(() => console.log("Hi"), 3000);

/*Ej 1.2*/

/*1*/

let proofAge = (age) =>
  age >= 18
    ? console.log("Puedes conducir")
    : console.log("No puedes conducir");

/*2*/

let compare = (num1, num2) =>
  num1 > num2 ? console.log("num1 es mayor") : console.log("num2 es mayor");

/*3*/

let typeOfNum = (num) =>
  num > 0
    ? "the number is positive"
    : num < 0
    ? "the number is negative"
    : "the number is 0";

let encontrarMaximo = (a, b, c) =>
  a >= b && a >= c
    ? `${a} is the biggest value`
    : b >= c
    ? `${b} is the biggest value`
    : `${c} is the biggest value`;

/*4*/

let parOimpar = arrNumbers.forEach((number) =>
  number % 2 == 0 ? console.log("par") : console.log("impar")
);

/*Ej 1.3*/

/*1*/
function display(param) {
  console.log(param);
}

let procesar = (num, output) => output(num);

procesar(7, display);

/*2*/

let operation = (num1, num2) => num1 + num2;

let calculadora = (num1, num2, callFun) => callFun(num1, num2);

console.log(calculadora(7, 5, operation));

/*3*/

let callFun = (nombre) => console.log(`Hola, ${nombre}`);

let esperarSaludar = (nombre, callFunction) =>
  setTimeout(() => callFunction(nombre), 2000);

esperarSaludar("Juan", callFun);

/*4*/

const arrEl = [1, "Juan", 27, "double"];

let printEl = (el) => console.log(el);

let procesarElements = (arrElements, callF) =>
  arrElements.forEach((element) => callF(element));

procesarElements(arrEl, printEl);

/*5*/

const cadena = "Jordi";

let procesarCadena = (cadena, callF) => callF(cadena.toUpperCase());

procesarCadena(cadena, printEl);

/*Ej 1.4*/

/*1 -Spread */

const array1 = [1, 2];
const array2 = [3, 4];

const array3 = [...array1, ...array2];

console.log(array3);

/*2 - Spread*/

function suma(...numeros) {
  let total = 0;
  for (const num of numeros) {
    total += num;
  }
  return total;
}

console.log(suma(1, 2, 5, 5));

/*3 - Spread*/

const objeto1 = {
  nombre: "Juan",
  edad: 23,
  sangre: "O+",
};

const objeto2 = { ...objeto1 };

objeto2.nombre = "Pepe";

console.log(objeto1);
console.log(objeto2);

/*4 - Destructuring */

const arr = ["mar", 2, 27, "tutú", 43];

const [first, second, ...rest] = arr;

console.log(first);
console.log(second);
console.log(rest);

/*5 - Spread*/

let sum = (a, b, c) => a + b + c;

const arrNums = [1, 2, 3];

console.log(sum(...arrNums));

/*6 - Spread, fusion*/

const obj2 = {
  DNI: 123,
  Pelo: "Rosa",
};
const obj1 = {
  Nombre: "Toto",
  Edad: 54,
};

const obj3 = { ...obj1, ...obj2 };

console.log(obj3);

/*Ej 1.5 -Array transformations*/

/*1 - MAP copy and manipulate*/

const testArr = [1, 2, 3, 4];

const doubled = testArr.map((n) => n * 2);

console.log(doubled);

/*2 - FILTER copy and take some*/

const pares = testArr.filter((n) => n % 2 == 0);

console.log(pares);

/*3 - FIND, igual que filter pero para en la 1ra coincidencia*/

const testArr2 = [1, 10, 8, 11];

const result = testArr2.find((n) => n > 10);

console.log(result);

/*4 - REDUCE sum all elements and return it*/

const testArr3 = [3, 7, 8, 21];

const suma2 = testArr3.reduce((accumulador, n) => {
  return accumulador + n;
}, 0);

console.log(suma2);

/*5 - combine it all*/

const arr5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const result2 = arr5
  .filter((n) => n >= 10)
  .map((n) => n * 2)
  .reduce((acc, n) => {
    return acc + n;
  }, 0);

console.log(result2);

/*6 - EVERY & SOME, checkea si la condicion se cumple, devuelve solo boolean*/

const arr6 = [11, 12, 13, 14];

const isGreater = arr6.every((n) => n > 10);
const isGreater2 = arr6.some((n) => n > 10);

console.log(isGreater);
console.log(isGreater2);

/*Ej 1.6 -Array loops*/

/*1 - forEach, iterate and print*/

let nombres = ["Anna", "Bernat", "Clara"];

nombres.forEach((nombre) => console.log(nombre));

/*2 - for-of, iterate and print*/

for (let nombre of nombres) {
  console.log(nombre);
}

/*3 - filter, numeros pares*/

let numerosDevuelta = [1, 2, 3, 4, 5, 6];

let numPares = numerosDevuelta.filter((n) => n % 2 == 0);

console.log(numPares);

/*4 - FOR-IN, iterar e imprimir*/

let obj = {
  nombre: "Ola",
  edad: 25,
  ciudad: "Barcelona",
};

for (let key in obj) {
  console.log(`${key}: ${obj[key]}`);
}

/*5 - FOR-OF con break, iterar para buscar*/

let numeros = [1, 2, 3, 4, 5, 6];

for (let num of numeros) {
  if (num === 5) {
    console.log("there is");
    break;
  }
}

/*6 - FOR-OF con INDEX, iterar para buscar*/

let i = 0;

for (let nombre of nombres) {
  console.log(`index: ${i} nombre: ${nombre}`);
  i++;
}

/*Ej 1.7 - Promises & Async/Await*/

/*1 - Promises*/

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello World", 2000);
  });
});

/*2 - Promises adding then*/

myPromise.then((message) => {
  console.log(message);
});

/*3 - Promises con reject*/

const myPromise2 = new Promise((resolve, reject) => {
  const input = "hello";
  if (input == "hello") {
    setTimeout(() => {
      resolve("valid", 2000);
    });
  } else {
    setTimeout(() => {
      reject("invalid", 2000);
    });
  }
});

myPromise2
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

/*4 - ASYNC/AWAIT */


async function greet(){
  console.log(await myPromise)
}

greet()

/*5 - TRY/CATCH */

async function greet(){
  try{
    console.log(await myPromise)

  }catch (error){
    console.log(error)
  }
}

/*6 - TRY/CATCH */

