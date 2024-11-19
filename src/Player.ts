import { Deck } from "./Deck";

export class Player {
    name: string;
    deck: Deck;

    constructor(name: string, deck: Deck | undefined = new Deck()) {
        this.name = name;
        this.deck = deck;
    }  
}