import { Card, Suit } from "./Card";
import { randomNumber } from "./utils/numbers";

export class Deck {
    cards: Card[];
    size: number;

    constructor(cards: Card[] | undefined = []) {
        this.cards = cards;
        this.size = cards.length;
    }

    append(card: Card): void {
        this.cards.push(card);
        this.size = this.cards.length;
    }

    pool(): Card | undefined {
        const poped = this.cards.shift();
        this.size = this.cards.length;
        return poped;
    }

    flushDeck(steps: number): void {
        for(let i = 0; i < steps; i++) {
            this.cards.forEach((card, index) => {
                const tmp = this.cards[index];
                const randomIndex = randomNumber(0, (this.cards.length-1));
                const coisa = this.cards[randomIndex];
                this.cards[index] = coisa;
                this.cards[randomIndex] = tmp;
            });
        }
    }

    static createDeck(objLimit:{min: number, max:number}, qtdJoker: number): Deck {
        const newDeck: Deck = new Deck();
        let actualSuit = 1;
        for(let i = 0; i < 4; i++) {
            for(let j = objLimit.min; j <= objLimit.max; j++) {
                newDeck.append(new Card(actualSuit, j));
            }
            actualSuit++;
        }
        for(let i = 0; i < qtdJoker; i++) {
            newDeck.append(new Card(5, 0));
        }
        return newDeck;
    }
}