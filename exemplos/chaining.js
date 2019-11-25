const pessoas = [ 
    { nome: "Bruno", idade: 25, cidade: "São Paulo" },
    { nome: "João", idade: 26, cidade: "São Paulo" },
    { nome: "Ana", idade: 20, cidade: "Belo Horizonte" },
    { nome: "Felipe", idade: 21, cidade: "Rio de Janeiro" },
    { nome: "Eduardo", idade: 30, cidade: "Uberlândia" },
]

const idadeSomadaMenosDe25 = pessoas.filter(pessoa => pessoa.idade <= 25).reduce((total, pessoa) => {
    return total + pessoa.idade
}, 0)


console.log(idadeSomadaMenosDe25);