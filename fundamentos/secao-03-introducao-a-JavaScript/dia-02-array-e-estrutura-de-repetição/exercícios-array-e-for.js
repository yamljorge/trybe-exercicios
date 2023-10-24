

// Percorra o array imprimindo todos os valores contidos nele com a função console.log().
//console.log(numbers);

// const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// for (let index = 0; index < numbers.length; index += 1) {
//   console.log(numbers[index]);
// };

// Some todos os valores contidos no array e imprima o resultado.
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   result += numbers[index];
// };

// console.log(result);


// Calcule e imprima a média aritmética dos valores contidos no array. A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.

// const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let sum = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   sum += numbers[index];
// };

// let average = sum / numbers.length;

// console.log(average);


// Com base no código que acabou de gerar, referente ao cálculo da média aritmética, faça com que: caso o valor final seja maior que 20, imprima a mensagem “O valor da média aritmética é maior que 20”; e, caso não seja maior que 20, imprima a mensagem “O valor da média aritmética é menor ou igual a 20”.

// const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let result = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   result += numbers[index];
// };

// result = result / numbers.length;

// if (result > 20) {
//   console.log('O valor da média aritmética é maior que 20');
// } else {
//   console.log('O valor da média aritmética é menor ou igual a 20');
// };


// Utilizando for, descubra o maior valor contido no array e imprima-o.

const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    result += 1;
  }
};

if (result === 0) {
  console.log('Nenhum valor ímpar encontrado');
} else {
  console.log(result);
};

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.