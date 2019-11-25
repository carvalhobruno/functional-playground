function rodarJogo() {
    let rodada = 0;
    let cartasDaMesa = [1,2,3,4,5,6,7,8]
    let cartasDosJogadores = [[1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8]]
    let placaresDosJogadores = [0, 0]

    while(cartasDaMesa.length > 0) {
        const cartaDaMesa = jogarCartaAleatoria(cartasDaMesa)

        console.log(`Rodada ${rodada}: Carta da mesa: ${cartaDaMesa}`)

        const carta1 = jogarComEstrategiaAleatoria(cartasDosJogadores[0])
        const carta2 = jogarComEstrategiaIgual(cartasDosJogadores[1], cartaDaMesa)
        rodada += 1

        if(carta1 > carta2) {
            placaresDosJogadores[0] += cartaDaMesa
        }
        if(carta2 > carta1) {
            placaresDosJogadores[1] += cartaDaMesa
        }
    }

    console.log(`Placar final: Jogador 1: ${placaresDosJogadores[0]}, Jogador 2: ${placaresDosJogadores[1]}`)

    if(placaresDosJogadores[0] == placaresDosJogadores[1]) {
        console.log("Os jogadores empataram!")
    }
    if(placaresDosJogadores[0] > placaresDosJogadores[1]) {
        console.log("O jogador 1 venceu!")
    }
    if(placaresDosJogadores[1] > placaresDosJogadores[0]) {
        console.log("O jogador 2 venceu!")
    }
}

function jogarCartaAleatoria(lista) {
    const index = Math.floor(Math.random() * lista.length)
    const valor = lista[index]
    lista.splice(index, 1)
    return valor
}

function jogarComEstrategiaAleatoria(cartasDoJogador) {
    const carta = jogarCartaAleatoria(cartasDoJogador)
    console.log(`\t Jogador 1: ${carta}`)
    return carta;
}

function jogarComEstrategiaIgual(cartasDoJogador, carta) {
    cartasDoJogador.splice(carta);
    console.log(`\t Jogador 2: ${carta}`)
    return carta
}

rodarJogo()