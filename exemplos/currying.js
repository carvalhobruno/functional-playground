function desconto(valor, desconto) {
    return valor * desconto
}

function descontoCurry(desconto) {
    return (valor) => {
        return valor * desconto
    }
}

function calcularDesconto10PorCento(valor) {
    return descontoCurry(0.10)(valor);
}

console.log(calcularDesconto10PorCento(100))