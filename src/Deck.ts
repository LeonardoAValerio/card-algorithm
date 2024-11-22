import { Card, Suit } from "./Card";
import { Range } from "./utils/interfaces/Range";
import { randomNumber } from "./utils/numbers";

export class Deck {
    cards: Card[];
    size: number;

    constructor(cards: Card[] | undefined = []) {
        this.cards = cards;
        this.size = cards.length;
    }

    /**
     * Adds a new card to the end of the deck.
     * @param card The card to add.
     */
    append(card: Card): void {
        this.cards.unshift(card);
        this.size = this.cards.length;
    }

    /**
     * Removes and returns the last card from the deck.
     * @returns The last card, or `undefined` if the deck is empty.
     */
    pool(): Card | undefined {
        const popped = this.cards.pop();
        this.size = this.cards.length;
        return popped;
    }

    /**
     * Shuffles the deck by randomizing the positions of its cards.
     * @param steps The number of times to shuffle. Defaults to 1.
     */
    flushDeck(steps: number | undefined = 1): void {
        for(let i = 0; i < steps; i++) {
            this.cards.forEach((card, index) => {
                const randomIndex = randomNumber({min: 0, max:(this.cards.length-1)});
                [this.cards[index], this.cards[randomIndex]] = [this.cards[randomIndex], this.cards[index]];
            });
        }
    }

    /**
     * Creates a new deck with cards within the specified range and an optional number of jokers.
     * @param range The range of card values (e.g., `min: 1, max: 12` creates cards with values from 1 to 12).
     * @param qtdJoker The number of jokers to include in the deck.
     * @returns A newly created deck.
     */
    static createDeck(range: Range, qtdJoker: number): Deck {
        const newDeck: Deck = new Deck();
        let currentSuit = 1;
        for(let i = 0; i < 4; i++) {
            for(let j = range.min; j <= range.max; j++) {
                newDeck.append(new Card(currentSuit, j));
            }
            currentSuit++;
        }
        for(let i = 0; i < qtdJoker; i++) {
            newDeck.append(new Card(5, 0)); // Suit 5 for jokers, value 0
        }
        return newDeck;
    }
}