import { Deck } from "./Deck";
import { Player } from "./Player";

export class Game {
    players: Player[];
    numberPlayers: number = 2;
    turnsPlayed: number;

    constructor() {
        this.players = this.inicializarPlayers();
        this.turnsPlayed = 0;
    }

    run(): void {
        const starterDeck = Deck.createDeck({min: 1, max: 12}, 2);
        starterDeck.flushDeck(3);
        this.divideDeckBetweenPlayers(starterDeck);
        this.startGame();
    }

    private validatePlayersHasSomeCard(): boolean {
        let isValid = true;
        this.players.forEach(player => {
            if(player.deck.size == 0) isValid = false;
        })
        return isValid;
    }

    private startGame() {
        let indexActualPlayer = 0;
        while(this.validatePlayersHasSomeCard()) {
            this.turnsPlayed++;
            const objRound = this.players[indexActualPlayer].playCard();
            indexActualPlayer = this.setIndexPlayer(indexActualPlayer);
        }
        console.log("Turnos Jogados: ", this.turnsPlayed);
    }

    private inicializarPlayers(): Player[] {
        const newPlayers: Player[] = [];
        for(let i = 0; i < this.numberPlayers; i++) {
            newPlayers.push(new Player("Player " + i));
        }
        return newPlayers;
    }

    private setIndexPlayer(indexActualPlayer: number) {
        if(indexActualPlayer == (this.players.length-1)) {
            indexActualPlayer = 0;
        }else {
            indexActualPlayer++;
        }
        return indexActualPlayer;
    }

    private divideDeckBetweenPlayers(deck: Deck) {
        let indexActualPlayer = 0;
        while(deck.size != 0) {
            const actualCard = deck.pool();
            if(actualCard == undefined) break;
            this.players[indexActualPlayer].deck.append(actualCard);
            indexActualPlayer = this.setIndexPlayer(indexActualPlayer);
        }
    }
}