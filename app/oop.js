class Deck {
    constructor() {
        this.cartas = [1,2,3,4,5,6,7,8]
    }

    tirarCartaAleatória() {
        const index = Math.floor(Math.random() * this.cartas.length)
        const valor = this.cartas[index]
        this.cartas.splice(index, 1)
        return valor
    }

    remover(valorDaCarta) {
        this.cartas.splice(this.cartas.indexOf(valorDaCarta), 1)
    }

    temCartas() {
        return this.cartas.length > 0
    }
}

class Jogador {
    constructor() {
        this.cartas = new Deck()
        this.placar = 0
    }

    adicionarPonto(valor) {
        this.placar += valor
    }

    verPlacar() {
        return this.placar
    }
}

class JogadorAleatorio extends Jogador {
    jogarCarta(carta) {
        return this.cartas.tirarCartaAleatória();
    }
}

class JogadorIgual extends Jogador {
    jogarCarta(carta) {
        this.cartas.remover(carta);
        return carta
    }
}

class Jogo {
    constructor() {
        this.jogadores = [new JogadorAleatorio, new JogadorIgual]
        this.cartas = new Deck()
        this.rodada = 0
    }

    novaRodada() {
        const cartaDaRodada = this.cartas.tirarCartaAleatória()

        console.log(`Rodada ${this.rodada}: Carta: ${cartaDaRodada}`)

        const carta1 = this.jogadores[0].jogarCarta(cartaDaRodada)
        const carta2 = this.jogadores[1].jogarCarta(cartaDaRodada)

        console.log(`\t Jogador 1: ${carta1}`)
        console.log(`\t Jogador 2: ${carta2}`)

        if(carta1 > carta2) {
            this.jogadores[0].adicionarPonto(cartaDaRodada)
        }
        if(carta2 > carta1) {
            this.jogadores[1].adicionarPonto(cartaDaRodada)
        }

        this.rodada += 1
    }

    iniciarJogo() {
        while(this.cartas.temCartas()) {
            this.novaRodada()
        }

        console.log(`Placar final: Jogador 1: ${this.jogadores[0].placar}, Jogador 2: ${this.jogadores[1].placar}`)

        if(this.jogadores[0].placar == this.jogadores[1].placar) {
            console.log("Os jogadores empataram!")
        }
        if(this.jogadores[0].placar > this.jogadores[1].placar) {
            console.log("O jogador 1 venceu!")
        }
        if(this.jogadores[1].placar > this.jogadores[0].placar) {
            console.log("O jogador 2 venceu!")
        }
    }
}

const jogo = new Jogo();

jogo.iniciarJogo();