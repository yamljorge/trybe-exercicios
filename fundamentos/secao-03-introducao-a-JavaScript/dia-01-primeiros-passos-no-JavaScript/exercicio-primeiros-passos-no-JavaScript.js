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

let chessPiece = 'rei';

switch (chessPiece.toLowerCase()) {
  case 'rei':
    console.log('Rei -> Uma casa para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo -> Diagonais.');
    break;
  case 'rainha':
    console.log('Rainha -> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  default:
    console.log('Erro, peça inválida!');
};

// Exercício 6

const nu1 = 18;
const nu2 = 25;
const nu3 = 77;

let Par = false;

if ((nu1 / 2 === 0 || nu2 / 2 === 0 || nu3 / 2 === 0)) { Par = true;
};
console.log(Par);

//Exercicio 7//

let aliquotaINSS;
let aliquotaIR;

let salarioBruto = 1000.00;

if (salarioBruto <= 1556.94) {
  aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquotaINSS = salarioBruto * 0.11;
} else {
  aliquotaINSS = 570.88;
};

let baseSalarial = salarioBruto - aliquotaINSS;

if (baseSalarial <= 1903.98) {
  aliquotaIR = 0;
} else if (baseSalarial <= 2826.65) {
  aliquotaIR = (baseSalarial * 0.075) - 142.80;
} else if (baseSalarial <= 3751.05) {
  aliquotaIR = (baseSalarial * 0.15) - 354.80;
} else if (baseSalarial <= 4664.68) {
  aliquotaIR = (baseSalarial * 0.225) - 636.13;
} else {
  aliquotaIR = (baseSalarial * 0.275) - 869.36;
};

console.log("Salário: R$" + (baseSalarial - aliquotaIR));