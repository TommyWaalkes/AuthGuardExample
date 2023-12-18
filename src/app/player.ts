import { Card, Creature, Type, Wall } from "./card";

export class Player {
    gold: number = 0;
    name: string | undefined;
    deck: Card[] = [];
    hand: Card[] = [];
    discard: Card[] = [];
    mineProduction: number = 0;
    creatures: Creature[] = [];
    hp: number = 40;
    drawPerTurn: number = 1;
    defending: boolean = false;
    wall: Wall = new Wall(20);

    normalDraw(): void {
        if (this.deck.length >= this.drawPerTurn) {
            for (let i = 0; i < this.drawPerTurn; i++) {
                let card: Card = this.deck.pop() as Card;
                this.hand.push(card);
            }
        }
        else {
            //Player should lose 
        }
    }

    drawCards(amount: number): void {
        if (this.deck.length >= amount) {
            for (let i = 0; i < amount; i++) {
                let card: Card = this.deck.pop() as Card;
                this.hand.push(card);
            }
        }
    }

    defend(attackers: Creature[]): void {
        this.defending = true;
    }

    chooseDefense() {

    }

    checkDead(): void {
        for (let i = 0; i < this.creatures.length; i++) {
            let c: Creature = this.creatures[i];
            if (!c.isALive()) {
                this.discard.push(c);
                this.creatures.splice(i, 1);
            }
        }
    }
}

export class Hoard {
    deck: Card[] = [];
    creatures: Creature[] = [];
    discard: Card[] = [];
    playCards(output: Card[]): Card[] {

        if (this.deck.length > 0) {
            let card: Card = this.deck.pop() as Card;
            output.push(card);
            if (card.type === Type.Creature || card.type === Type.Minion) {
                this.creatures.push(card as Creature);
            }
            if (card.type == Type.Minion) {
                return this.playCards(output);
            }
            else {
                return output;
            }
        }
        else {
            return [];
        }
    }

    attack(target: Player | Hoard) {
        for (let i: number = 0; i < this.creatures.length; i++) {
            this.creatures[i].turned = true;
        }
        target.defend(this.creatures)
    }

    defend(attackers: Creature[]) {
        let totalDmg = 0;
        for (let i = 0; i < attackers.length; i++) {
            totalDmg += attackers[i].attack;
        }
        if (this.deck.length > totalDmg) {
            totalDmg = this.deck.length;
        }
        for (let i = 0; i < totalDmg; i++) {
            this.deck.pop();
        }
    }
}