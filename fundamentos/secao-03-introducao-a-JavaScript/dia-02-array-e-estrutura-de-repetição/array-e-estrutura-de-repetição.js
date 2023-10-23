//Array e estrutura de repetição

//Template literals



const produto = 'Iphone 15';
const preço = 12895;
const desconto = 33;

const mensagem =
`Produto: ${produto}
Preço: ${preço}
Desconto: ${desconto}%
Preço com desconto: ${(preço - (preço * (desconto / 100))).toFixed(2)}`;

console.log(mensagem);


