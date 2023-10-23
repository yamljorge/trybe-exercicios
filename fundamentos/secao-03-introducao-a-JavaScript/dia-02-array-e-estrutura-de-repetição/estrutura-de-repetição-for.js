//Vamos entender cada etapa da construção do loop for
// Array de números
const numbers = [2, 19, 23, 4, 8, 10];

// Variável complementar que irá acumular os valores da somados
let sum = 0;

// Loop for, que irá iterar da posição 0 até o último elemento do array
// A variável sum sempre irá receber o valor atual dela + o número do array
for (let index = 0; index < numbers.length; index += 1) {
sum += numbers[index];
};

//console.log(sum);

const shoppingList = ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos', 'Feijão', 'Café', 'Salsicha', 'Nescau', 'Farinha'];

for (let index = 0; index < shoppingList.length; index +=1) {
  //console.log(index);
  //console.log(shoppingList[index]);
  //console.log(`${index} - ${shoppingList[index]}`);
}

const cars = ['Saab', 'Volvo', 'BMW', 'Chevrolet'];
for (let index = 0; index < cars.length; index += 1) {
  const currentCar = cars[index];
  //console.log(currentCar);
};


//Para fixar Exercício 1

const groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia', 'Macarrão'];

for (let index = 0; index <groceryList.length; index += 1) {
  console.log(groceryList[index]);
}