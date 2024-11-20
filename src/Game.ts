import { Card } from "./Card";
import { Deck } from "./Deck";
import { Player } from "./Player";
import { Intention } from "./utils/enums/Intentions";
import { Extensions } from "./utils/File/Extensions";
import { Archive } from "./utils/File/File";
import { Round } from "./utils/interfaces/Round";
import { randomNumber } from "./utils/numbers";

export class Game {
    private players: Player[];
    private numberPlayers: number = 2;
    private turnsPlayed: number;
    private result: Archive;

    constructor() {
        this.players = this.inicializarPlayers();
        this.result = Archive.create({name: "result", path: "", extension:Extensions.TXT});
        this.turnsPlayed = 0;
    }

    private setIndexPlayer(indexActualPlayer: number): number {
        if(indexActualPlayer == (this.players.length-1)) {
            indexActualPlayer = 0;
        }else {
            indexActualPlayer++;
        }
        return indexActualPlayer;
    }

    private validatePlayersHasSomeCard(): boolean {
        let isValid = true;
        this.players.forEach(player => {
            if(player.deck.size == 0) isValid = false;
        })
        return isValid;
    }

    private checkVictory(objRound: Round, cardOther: Card): boolean {
        if(objRound.intention == Intention.SUIT) return objRound.card.suit > cardOther.suit;
        return objRound.card.value > cardOther.value;
    }

    private addCardsToWinnerPlayer(player: Player, cards: Card[]): void {
        for(let i = 0; i < 2; i++) {
            if(randomNumber(1, 2) == 1) {
                player.deck.append(cards.pop() as Card);
            }else {
                player.deck.append(cards.shift() as Card);
            }
        }
    }

    private playRound(playerTurn: Player, playerChallenge: Player): void {
        const objRound = playerTurn.playCard();
        const cardOther = playerChallenge.deck.pool();
        if(cardOther == undefined) throw new Error(`Card of player{${playerChallenge.name}} is undefined!`);
        if(this.checkVictory(objRound, cardOther)) {
            this.addCardsToWinnerPlayer(playerTurn, [objRound.card, cardOther]);
        }else {
            this.addCardsToWinnerPlayer(playerChallenge, [objRound.card, cardOther]);
        }
    }

    private startGame(): void {
        let indexActualPlayer = 0;
        while(this.validatePlayersHasSomeCard()) {
            console.log(this.players);
            this.turnsPlayed++;
            this.playRound(this.players[indexActualPlayer], this.players[this.setIndexPlayer(indexActualPlayer)]);
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

    private divideDeckBetweenPlayers(deck: Deck): void {
        let indexActualPlayer = 0;
        while(deck.size != 0) {
            const actualCard = deck.pool();
            if(actualCard == undefined) break;
            this.players[indexActualPlayer].deck.append(actualCard);
            indexActualPlayer = this.setIndexPlayer(indexActualPlayer);
        }
    }

    run(): void {
        const starterDeck = Deck.createDeck({min: 1, max: 12}, 2);
        starterDeck.flushDeck(3);
        this.divideDeckBetweenPlayers(starterDeck);
        this.startGame();
    }
}