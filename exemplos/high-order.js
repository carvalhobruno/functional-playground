const pessoas = [ 
    { nome: "Bruno", idade: 25 },
    { nome: "João", idade: 26 },
    { nome: "Ana", idade: 20 },
    { nome: "Felipe", idade: 21 },
    { nome: "Eduardo", idade: 30 },
]

const pessoasComMaisDe25 = pessoas
    .filter((pessoa) => {
        return pessoa.idade > 25
    });

console.log(pessoasComMaisDe25);
console.log(pessoas);