function rodarJogo() {
    let rodada = 0;
    let cartasDaMesa = [1,2,3,4,5,6,7,8]
    let cartasDosJogadores = [[1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8]]
    let placaresDosJogadores = [0, 0]

    while(cartasDaMesa.length > 0) {
        const cartaDaRodada = selecionaCartaAleatoria(cartasDaMesa)
        cartasDaMesa = removerCarta(cartasDaMesa, cartaDaRodada)
        console.log(`Rodada ${rodada}: Carta da mesa: ${cartaDaRodada}`)

        const carta1 = jogarComEstrategiaAleatoria(cartasDosJogadores[0])
        const carta2 = jogarComEstrategiaIgual(cartasDosJogadores[1], cartaDaRodada)
        cartasDosJogadores[0] = removerCarta(cartasDosJogadores[0], carta1)
        cartasDosJogadores[1] = removerCarta(cartasDosJogadores[1], carta2)
        

        rodada += 1
        console.log(`\t Jogador 1: ${carta1}`)
        console.log(`\t Jogador 2: ${carta1}`)

        if(carta1 > carta2) {
            placaresDosJogadores[0] += cartaDaRodada
        }
        if(carta2 > carta1) {
            placaresDosJogadores[1] += cartaDaRodada
        }
    }

    mensagemFinal(placaresDosJogadores)
    
}

function selecionaCartaAleatoria(lista) {
    const index = Math.floor(Math.random() * lista.length)
    return lista[index]
}

function jogarComEstrategiaAleatoria(cartasDoJogador) {
    return selecionaCartaAleatoria(cartasDoJogador)
}

function jogarComEstrategiaIgual(cartasDoJogador, carta) {
    return carta
}

function removerCarta(baralho, carta) {
    const index = baralho.indexOf(carta)
    return [...baralho.slice(0, index), ...baralho.slice(index + 1)]
}

function mensagemDeVitoria(placaresDosJogadores) {
    if(placaresDosJogadores[0] == placaresDosJogadores[1]) {
        return("Os jogadores empataram!")
    }
    if(placaresDosJogadores[0] > placaresDosJogadores[1]) {
        return("O jogador 1 venceu!")
    }
    if(placaresDosJogadores[1] > placaresDosJogadores[0]) {
        return("O jogador 2 venceu!")
    }
}

function mensagemDoPlacar(placaresDosJogadores) {
    return `Placar final: Jogador 1: ${placaresDosJogadores[0]}, Jogador 2: ${placaresDosJogadores[1]}`
}

function mensagemFinal(placaresDosJogadores) {
    console.log(mensagemDoPlacar(placaresDosJogadores))
    console.log(mensagemDeVitoria(placaresDosJogadores))
}

rodarJogo()