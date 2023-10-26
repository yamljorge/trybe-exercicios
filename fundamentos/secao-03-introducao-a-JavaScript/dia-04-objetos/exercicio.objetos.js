// //Manipulação de objetos
const reader = {
  name: 'Julia',
   lastName: 'Pessoa',
   age: 21,
   favoriteBooks: [
     {
       title: 'O Senhor dos Anéis - a Sociedade do Anel',
       author: 'J. R. R. Tolkien',
       publisher: 'Martins Fontes',
     },
   ],
 };
// //1 - Acesse as chaves name, lastName e title e exiba informações em um console.log() no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Senhor dos Anéis - a Sociedade do Anel’.”.
// console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama "${reader.favoriteBooks[0].title}".`);

// //2 - Adicione um novo livro favorito na chave favoriteBooks, que é um array de objetos. Atribua a essa chave um objeto que contenha as seguintes informações:

// // {
// //   title: 'Harry Potter e o Prisioneiro de Azkaban',
// //   author: 'JK Rowling',
// //   publisher: 'Rocco',
// // }

 reader.favoriteBooks.push(
   {
     title: 'Harry Potter e o Prisioneiro de Azkaban',
     author: 'JK Rowling',
     publisher: 'Rocco',
   },
 );

 console.log(reader);

// 3 - Acesse as chaves name e favoriteBooks e faça um console.log() no seguinte formato:

// “Julia tem {quantidade} livros favoritos.”

// {quantidade} corresponde à quantidade de livros favoritos, sendo um número gerado automaticamente pelo seu código. Caso a quantidade seja igual a 1, a frase deve ser:

//“Julia tem 1 livro favorito.”

// Nessa solução, temos duas saídas. Se o número de livros favoritos for maior que 1, escreve "livros favoritos", no plural. Se não for maior que 1, escreve no singular: "livro favorito".
// const numFavoriteBooks = reader.favoriteBooks.length;

 numFavoriteBooks > 1 
 console.log(`${reader.name} tem ${numFavoriteBooks} livros favoritos.`);
 console.log(`${reader.name} tem ${numFavoriteBooks} livro favorito.`);

// Manipulação de objetos 

 const order = {
   name: 'Rafael Andrade',
   phoneNumber: '11-98763-1416',
   address: {
     street: 'Rua das Flores',
     number: '389',
     apartment: '701',
   },
   order: {
     pizza: {
       marguerita: {
         amount: 1,
         price: 25,
       },
       pepperoni: {
         amount: 1,
         price: 20,
       },
     },
     drinks: {
       coke: {
         type: 'Coca-Cola Zero',
         price: 10,
         amount: 1,
       },
     },
     delivery: {
       deliveryPerson: 'Ana Silveira',
       price: 5,
     },
   },
   payment: {
     total: 60,
   },
 };

 const customerInfo = (fullOrder) => {
   // Adicione abaixo as informações necessárias.
     const deliveryPerson = fullOrder.order.delivery.deliveryPerson;
     const costumerName = fullOrder.name;
     const phoneNumber = fullOrder.phoneNumber;
     const street = fullOrder.address.street;
     const addressNumber = fullOrder.address.number;
     const apartment = fullOrder.address.apartment;
  
     return `Olá, ${deliveryPerson}, entrega para: ${costumerName}, Telefone: ${phoneNumber}, ${street}, Número: ${addressNumber}, AP: ${apartment}.`;
   }

// console.log(customerInfo(order));

 const orderModifier = (fullOrder) => {
//   // Adicione abaixo as informações necessárias.
//   // Altera o nome
   fullOrder.name = 'Luiz Silva';
   fullOrder.payment.total = 50;

//   // Pega todos os nomes de pizzas em um array e junto os valores com uma vírgula mais um espaço. join(', ')
  const pizzas = Object.keys(fullOrder.order.pizza).join(', ');

//   // Retorna a string com o resultado
   return `Olá, ${fullOrder.name}, o valor total de seu pedido de ${pizzas} e ${fullOrder.order.drinks.coke.type} é R$${fullOrder.payment.total},00.`;
 }

 console.log(orderModifier(order));

// Manipulação de objetos

// const school = {
//   lessons: [
//     {
//       course: 'Python',
//       students: 20,
//       professor: 'Carlos Patrício',
//       shift: 'Manhã',
//     },
//     {
//       course: 'Kotlin',
//       students: 10,
//       professor: 'Gabriel Oliva',
//       shift: 'Noite',
//     },
//     {
//       course: 'JavaScript',
//       students: 738,
//       professor: 'Gustavo Caetano',
//       shift: 'Tarde',
//     },
//     {
//       course: 'MongoDB',
//       students: 50,
//       shift: 'Noite',
//     },
//   ]
// };

// // Crie uma função que obtenha o valor da chave de acordo com sua posição no array. Essa função deve possuir dois parâmetros: o objeto e a posição no array.

// const getValueByNumber = (obj, index) => Object.values(obj)[index];

// console.log(getValueByNumber(school, 0));

// // Crie uma função que retorne a soma do número total de estudantes em todos os cursos.

// const getNumberOfStudents = (obj) => {
//   // Declara uma variável para contador
//   let count = 0;

//   // Itera o array e incrementa em count o total de estudantes em cada curso
//   for (let index = 0; index < obj.lessons.length; index += 1) {
//     count += obj.lessons[index].students;
//   }

//   // Retorna o total de estudantes
//   return count;
// }

// console.log(getNumberOfStudents(school));

// // Crie uma função que verifica se uma determinada chave existe em todos os elementos do array lessons. O retorno deve ser um booleano (true ou false). Essa função deve possuir dois parâmetros: o objeto e o nome da chave. 

 const verifyProp = (obj, key) => {
   for (let index = 0; index < obj.lessons.length; index += 1) {
     if (obj.lessons[index][key] === undefined) {
       return false;
     }
   }
   return true;
 }

 console.log(verifyProp(school, 'professor')); // false

// // Crie uma função para alterar o turno para noite no curso de Python. Essa função deve ter três parâmetros: a base de dados a ser modificada, o nome do curso e o novo valor da chave.

// const changeKey = (obj, course, value) => {
//   // Encontra o elemento que o course é igual a Python
//   let findCourse;
//   for (let index = 0; index < obj.lessons.length; index += 1) {
//     let element = obj.lessons[index];
//     if (element.course === course) {
//       findCourse = element;
//       break;
//     }
//   }

//   // Condição para exibir o resultado. Caso o findCourse seja undefined, significa que o curso não foi encontrado.
  if (findCourse !== undefined) {
    findCourse.shift = value;
     return findCourse;
  } else {
    return 'Curso não encontrado.';
  };

   console.log(changeKey(school, 'Python', 'Noite'));



// Manipulação de objetos

const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

// Criação de objeto
const result = {};

// Loop que irá contar quantas vezes cada fruta aparece no array basket
for (let index = 0; index < basket.length; index += 1) {
  let fruit = basket[index];
  // Se a propriedade com o nome da fruta ainda não existir, então ela será criada com o valor 1. Caso ela já exista, vamos incrementar o valor.
  if (!result[fruit]) {
    result[fruit] = 1;
  } else {
    result[fruit] += 1;
  }
};

// Convertemos o objeto result em um array
const entries = Object.entries(result);

// Criação de um novo array
let newArray = [];

// Loop que irá verificar se o número de frutas é maior ou não do que 1. Caso seja maior, adicionamos a letra "s".
for (let index = 0; index < entries.length; index += 1) {
  if (entries[index][1] > 1) {
    newArray.push(`${entries[index][1]} ${entries[index][0]}s`);
  } else {
    newArray.push(`${entries[index][1]} ${entries[index][0]}`);
  }
};

// Exibimos a string juntando os valores do array "newArray" com uma vírgula e um espaço em branco.
console.log(`Sua cesta possui: ${newArray.join(', ')}.`);