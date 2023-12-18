import { Card, Creature, Minion, Type } from "./card";
import { Player } from "./player";

export class effect{

    allowedTargets:Type[] = []; 

    constructor(allowedTargets:Type[]){
        this.allowedTargets = allowedTargets;
    }
    doEffect(targets:any[]):any{

    }
}

export class damage implements effect{
    amount:number = 1; 
    
    constructor(amount:number){
        this.amount = amount; 
    }
    allowedTargets: Type[] =[];
    type: Type = Type.Spell;
    
    doEffect(targets:Player[] | Creature[]): any {
        for(let i: number = 0; i < targets.length; i++){
            let t = targets[i]; 
            t.hp -= this.amount;
        }
    }

}



export class CreateMinionOrCreature implements effect{
    // attack: number;
    // hp: number;
    // speed: number;
    // amountCreated:number; 
    // type:Type = Type.Creature;
    // constructor(attack:number, hp:number, speed:number, amountCreated:number){
    //     this.attack = attack; 
    //     this.hp = hp; 
    //     this.speed = speed; 
    //     this.amountCreated = amountCreated;
    // }
    bodyToMake:Minion|Creature; 
    amount:number = 1; 
    allowedTargets: Type[] = [];
    constructor(bodyToMake:Minion|Creature, amount:number){
        this.bodyToMake = bodyToMake;
        this.amount = amount;
    }

    doEffect(targets: Player[]) {
        if(this.amount<2){
           return structuredClone(this.bodyToMake);
        }
        else{
            let output:Minion[]|Creature[] = []; 
            for(let i = 0; i < this.amount; i++){
               output[i] = structuredClone(this.bodyToMake);
            }

            return output; 
        }
    }
    
}