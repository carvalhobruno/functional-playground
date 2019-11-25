function rodarJogo() {
    let estado = {
        rodada: 0,
        cartasDaMesa: [1,2,3,4,5,6,7,8],
        cartasDosJogadores: [[1,2,3,4,5,6,7,8], [1,2,3,4,5,6,7,8]],
        placaresDosJogadores: [0, 0]
    }

    while(estado.cartasDaMesa.length > 0) {
        estado = proximoEstado(estado)
        mensagemDaRodada(estado)
    }

    mensagemFinal(estado.placaresDosJogadores)
}

rodarJogo()

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

function mensagemDaRodada(estado) {
    console.log(`Rodada ${estado.rodada}: Carta da mesa: ${estado.ultimaCartaDaRodada}`)
    console.log(`\t Jogador 1: ${estado.ultimasCartasJogadas[0]}`)
    console.log(`\t Jogador 2: ${estado.ultimasCartasJogadas[1]}`)
}

function proximoEstado(estado) {
    const cartaDaRodada = selecionaCartaAleatoria(estado.cartasDaMesa)
    const carta1 = jogarComEstrategiaAleatoria(estado.cartasDosJogadores[0])
    const carta2 = jogarComEstrategiaIgual(estado.cartasDosJogadores[1], cartaDaRodada)
    return {
        rodada: estado.rodada + 1,
        cartasDaMesa:  removerCarta(estado.cartasDaMesa, cartaDaRodada),
        cartasDosJogadores:  [removerCarta(estado.cartasDosJogadores[0], carta1), removerCarta(estado.cartasDosJogadores[1], carta2)],
        placaresDosJogadores: novosPlacares(estado.placaresDosJogadores, [carta1, carta2]),
        ultimasCartasJogadas: [carta1, carta2],
        ultimaCartaDaRodada: cartaDaRodada
    }
}

function novosPlacares(placaresDosJogadores, cartasJogadas) {
    if(cartasJogadas[0] > cartasJogadas[1]) {
        return [placaresDosJogadores[0] + cartasJogadas[0], placaresDosJogadores[1]] 
    }
    else if(cartasJogadas[1] > cartasJogadas[0]) {
        return [placaresDosJogadores[0], placaresDosJogadores[1] + cartasJogadas[1]] 
    } else {
        return placaresDosJogadores
    }
}
