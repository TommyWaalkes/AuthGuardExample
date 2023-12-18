import { Creature, Minion } from "./card";

export class fight{
    attacker:Creature | Minion = {} as Creature;
    blocker:Creature | Minion = {} as Creature;

    constructor(attacker:Creature | Minion, blocker:Creature | Minion){
        this.attacker = attacker; 
        this.blocker = blocker;
    }

    fight(){
        if(this.attacker.speed > this.blocker.speed){
            this.blocker.hp -= this.attacker.attack;

            if(this.blocker.isALive()){
                this.attacker.hp -= this.blocker.attack;
            }
        }
        else if(this.attacker.speed < this.blocker.speed){
            this.attacker.hp -= this.blocker.attack;

            if(this.attacker.isALive()){
                this.blocker.hp -= this.attacker.attack;
            }
        }
        else{
            this.attacker.hp -= this.blocker.attack;
            this.blocker.hp -= this.attacker.attack;
        }
    }
}