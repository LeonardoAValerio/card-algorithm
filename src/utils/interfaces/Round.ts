import { Card } from "../../Card";
import { Intention } from "../enums/Intentions";

export interface Round {
    card: Card;
    intention: Intention;
}