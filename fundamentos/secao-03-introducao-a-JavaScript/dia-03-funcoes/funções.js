function giveGreeting() {
  return `Olá, boas-vindas à Trybe!`;
};

console.log(giveGreeting()); // Olá, boas-vindas à Trybe!

function sum(num1, num2) {
  return num1 + num2;
};

const result = sum(10, 8);

console.log(result); // 18


const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function greetCustomer(customer) {
  for (let index = 0; index < customer.length; index += 1) {
    console.log(`Olá, ${customer[index]}. Essa é sua conta do TrybeBank.`);
  }
};

greetCustomer(trybeBankCustomers);