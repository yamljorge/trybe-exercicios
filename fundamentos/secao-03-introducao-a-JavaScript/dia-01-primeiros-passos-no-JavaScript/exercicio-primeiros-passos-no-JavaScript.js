//Exercício 1

let num1 = 2;
let num2 = 3;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2);

//Exercício 2

let num3 = 3;
let num4 = 4;

if (num3 > num4) {
  console.log(num3 + " é maior que " + num);
} else if (num3 === num4) {
  console.log("Os números são iguais.");
} else {
  console.log(num4 + " é maior que " + num3);
};

//Exercício 3

let num5 = 0;
let num6 = 1;
let num7 = 0;

if (num5 > num6 &&  num5 > num7) {
  console.log('O maior número é ' + num5);
} else if (num6 > num5 &&  num6 > num7) {
  console.log('O maior número é ' + num6);
} else if (num7 > num5 &&  num7 > num6) {
  console.log('O maior número é ' + num7);
} else {
  console.log('IHHHH, tem números iguais!');
};


//Exercício 4

let angulo1 = 100;
let angulo2 = 40;
let angulo3 = 0;

let somaAngulo = angulo1 + angulo2 + angulo3;
let allAngulo = angulo1 > 0 && angulo2 > 0 && angulo3;

if(allAngulo){
  if (somaAngulo === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido!');
}

//Exercício 5



