import { Card } from "./Card";
import { Deck } from "./Deck";
import { Intention } from "./utils/enums/Intentions";

export class Player {
    name: string;
    deck: Deck;

    constructor(name: string, deck: Deck | undefined = new Deck()) {
        this.name = name;
        this.deck = deck;
    }

    playCard(): {card: Card, intetion: Intention} {
        const card = this.deck.pool();
        if(!card) throw new Error(`Card of player{${this.name}} is undefined!`);
        const intetion = this.chooseIntention(card);
        return {card, intetion};
    }

    private chooseIntention(card: Card): Intention {
        if(card.suit == 1) return Intention.VALUE;
        if(card.suit == 2) {
            if(card.value <= 4) return Intention.SUIT;
            return Intention.VALUE;
        }
        if(card.suit == 3) {
            if(card.value <= 8) return Intention.SUIT;
            return Intention.VALUE;
        }
        if(card.suit == 4) {
            if(card.value <= 10) return Intention.SUIT;
            return Intention.VALUE;
        }
        return Intention.SUIT;
    }
}