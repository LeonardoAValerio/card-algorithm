import { Deck } from "./Deck";
import { Player } from "./Player";

export class Game {
    players: Player[];
    numberPlayers: number = 2;

    constructor() {
        this.players = this.inicializarPlayers();
    }

    run(): void {
        const starterDeck = Deck.createDeck({min: 1, max: 12}, 2);
        starterDeck.flushDeck(3);
        this.divideDeckBetweenPlayers(starterDeck);
        this.startGame();
    }

    private startGame() {
        let indexActualPlayer = 0;
        while(true) {

        }
    }

    private inicializarPlayers(): Player[] {
        const newPlayers: Player[] = [];
        for(let i = 0; i < this.numberPlayers; i++) {
            newPlayers.push(new Player("Player " + i));
        }
        return newPlayers;
    }

    private divideDeckBetweenPlayers(deck: Deck) {
        let indexActualPlayer = 0;
        while(deck.size != 0) {
            const actualCard = deck.pool();
            if(actualCard == undefined) break;
            this.players[indexActualPlayer].deck.append(actualCard);
            if(indexActualPlayer == (this.players.length-1)) {
                indexActualPlayer = 0;
            }else {
                indexActualPlayer++;
            }
        }
    }
}