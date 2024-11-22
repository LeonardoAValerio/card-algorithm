import { Range } from "./interfaces/Range";

export function randomNumber(range:Range): number {
    return Math.floor(range.min + (Math.random() * (range.max - range.min)));
}