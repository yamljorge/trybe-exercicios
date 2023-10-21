//Operador AND

const food = 'pão';
const drink = 'café';

if (drink === 'café' && food === 'pão') {
  console.log('Obrigado!');
} else {
  console.log('Erraram meu pedido.');
}

//encadeamento de &&

let carrot = true;
let milk = true;
let rice = true;
let bean = true;

let listaDeCompras = carrot && milk && rice && bean;

console.log(listaDeCompras);

//Precedência de operadores

console.log(10 + 5 * 5); // 10 + (5 * 5) = 10 + (25) = 10 + 25 = 35

const currentHour = 17;
let message = "";

if (currentHour >= 22) {
  message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
  message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
  message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
  message = "Hora do Almoço!!!";
} else if (currentHour >= 4 && currentHour < 11)
  message = "Hmmm, cheiro de café recém-passado";  

console.log(message);

//Operador OR

const principalDrink = 'café';
const alternativeDrink = 'morango';

if (principalDrink === 'café' || alternativeDrink === 'suco de laranja') {
  console.log("Agradeço por me atender :D");
} else {
  console.log("Ei, não foi isso que eu pedi!");
}

console.log(true || true); 
console.log(true || false); 
console.log(false || true); 
console.log(false || false); 

const goToSP = false;
const goToGO = true;

if ((goToSP === true && goToGO === false) || (goToSP === false && goToGO === true)) {
  console.log('Eu fui para apenas um dos lugares');
} else {
  console.log('Eu fui para os dois, ou para nenhum.');
}



//Operador NOT

console.log((2 + 2) === 4);
console.log(!(2 + 2) === 4);

//Strings

let charmander = "Melhor Pokémon inicial";

console.log(charmander);
console.log(!charmander);

//Números

console.log(42);
console.log(0);

console.log(!42);
console.log(!0); // O número 0 tem o valor "falsy" no JavaScript. Logo, seu oposto é true.

//Valores Nulos

console.log(null);
console.log(!null);

//Valores Indefinidos

console.log(undefined);
console.log(!undefined);