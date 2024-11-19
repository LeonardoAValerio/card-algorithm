export enum Suit {
    DIAMONDS = 1, SPADES = 2, HEARTS = 3, CLUBS = 4, JOKER = 5 
}

export class Card {
    value: number;
    suit: number;

    constructor(suit: number, value: number) {
        this.suit = suit;
        this.value = value;
    }
}