const age = 17.999999 + 0.000001;

if (age >= 18) {
  console.log('Maior de idade');
} else {
  console.log('Menor de idade');
}



const beenPrice = 10;
const totalMoney = 11;
let message ='';

if (totalMoney < beenPrice) {
  message = 'Você não possui saldo suficiente';
} else if (totalMoney === beenPrice) {
  message = 'Você vai gastar todo o seu dinheiro';
} else {
  message = 'Pode Comprar'
}

console.log(message);



const personAge = 200;
let canVote;

if (personAge >= 16) {
  canVote = 'Pode Votar!'
} else {
  canVote = 'Não pode votar'
}

console.log(canVote);



const personAge2 = 15;

const canVote2 = personAge2 >= 16 ? 'Pode votar!' : 'Não pode votar!'

console.log(canVote2);



let temperature = 22;
let weather = temperature > 30 ? 'tá quente' : 'tá de boa'

console.log(`A temperatura é ${temperature}, portanto, ${weather}.`);



let temperature2 = 35;
let weather2 = temperature2 > 30 && 'tá quente'

console.log(`A temperatura é ${temperature2}, portanto, ${weather2}.`);


const grade = 100;
let message2 = '';

if (grade >= 80) {
  message2 = "Parabéns, você faz parte do grupo de pessoas aprovada!";
} else if (grade >= 60 && grade < 80) {
  message2 = "Você está na nossa lista de espera.";
} else {
  message2 = "Infelizmente, você reprovou.";
}

console.log(message2);