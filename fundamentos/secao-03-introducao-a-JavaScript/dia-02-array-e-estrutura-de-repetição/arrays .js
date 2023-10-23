//Arrays [ ]

const shoppingList = ['Arroz', 'Batata', 'Leite Ninho', 'Sucrilhos'];

// Acessando o primeiro elemento do array shoppingList
//console.log(shoppingList[2]);

// Acessando o terceiro elemento do array shoppingList e guardando dentro de uma constante
const item = shoppingList[1];


//Alterar o valor de um elemento

//console.log(item);  

shoppingList[0] = 'Suco de Cajú';



//Adicionar e remover elementos de um array

// push() Adiciona um elemento ao final do array
shoppingList.push('Cotonetes');

// unshift() Adiciona um elemento no início do array
shoppingList.unshift('Água de Coco');

// pop() Remove o último elemento do array
//shoppingList.pop();

// shift() Remove o primeiro elemento do array
//shoppingList.shift();

console.log(shoppingList)

//Tamanho do array 
//Para isso vamos utilizar a propriedade length (tamanho).

console.log(shoppingList.length);

//Para fixar Exercício 1

const menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
const menuServices = menu[1];

console.log(menuServices);

menu.push('Contato')

console.log(menu);



