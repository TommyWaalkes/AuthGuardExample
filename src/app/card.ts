import { effect } from "./effect";

export class Card {
    id:number;
    name:string;
    type:Type;
    cost:number; 
    effects:effect[];
    color:string;
    image:string;
    text:string;
    turned:boolean = false;

    constructor(id:number, name:string, type:Type, cost:number, color:string, image:string, text:string, effects:effect[]){
        this.id = id; 
        this.name = name; 
        this.type = type; 
        this.cost = cost; 
        this.color = color; 
        this.image = image; 
        this.text = text; 
        this.effects = effects;
    }

   addEffect(e:effect){
    this.effects.push(e);
   }
   removeEffect(index:number){
    this.effects.splice(index, 1);
   }

   runEffects(){
    for(let i:number = 0; i < this.effects.length; i++){
        let e:effect = this.effects[i];
       
        e.doEffect([]);
    }
   }
}

export enum Type{
    Creature, 
    Minion,
    Tech, 
    Mine, 
    Wall, 
    Attachment, 
    Spell,
    Player
}

export class Creature implements Card{
    attack:number; 
    hp:number;
    maxHp:number;
    speed:number; 
    id: number;
    name: string;
    type: Type;
    cost: number;
    effects: effect[];
    color: string;
    image: string;
    text: string;
    turned: boolean = false;
    attacking:boolean = false;
    constructor(hp:number, attack:number, speed:number, 
        id:number, name:string, type:Type, cost:number, 
        color:string, image:string, text:string, effects:effect[]){
        this.hp = hp; 
        this.maxHp = hp; 
        this.attack = attack; 
        this.speed = speed;
        this.id = id; 
        this.name = name; 
        this.type = type; 
        this.cost = cost; 
        this.color = color; 
        this.image = image; 
        this.text = text; 
        this.effects = effects;
    }

    isALive():boolean{
        return this.hp > 0; 
    }
    resetHp():void{
        this.hp = this.maxHp;
    }
   
 
    
    addEffect(e: effect): void {
        throw new Error("Method not implemented.");
    }
    removeEffect(index: number): void {
        throw new Error("Method not implemented.");
    }
    runEffects(): any {
        //let c: 
    }
}

export class Minion implements Creature{
    id: number;
    name: string;
    type: Type;
    cost: number;
    effects: effect[];
    color: string;
    image: string;
    text: string;
    attack: number;
    hp: number;
    maxHp: number;
    speed: number;
    turned: boolean = false;
    attacking:boolean = false;
    constructor(hp:number, attack:number, speed:number, 
        id:number, name:string, type:Type, cost:number, 
        color:string, image:string, text:string, effects:effect[]){
        this.hp = hp; 
        this.maxHp = hp;
        this.attack = attack; 
        this.speed = speed;
        this.id = id; 
        this.name = name; 
        this.type = type; 
        this.cost = cost; 
        this.color = color; 
        this.image = image; 
        this.text = text; 
        this.effects = effects;
    }

    resetHp(): void {
        this.hp = this.maxHp;
    }
    isALive(): boolean {
        return this.hp > 0; 
    }

    addEffect(e: effect): void {
        throw new Error("Method not implemented.");
    }
    removeEffect(index: number): void {
        throw new Error("Method not implemented.");
    }
    runEffects() {
        throw new Error("Method not implemented.");
    }
    
}

export class Tech{
    researchTime:number = 0; 
    researchLevel:number = 0; 

    constructor(private effect:Function){

    }

    incrementResearch(){
        this.researchLevel++;
        if(this.researchTime <= this.researchLevel){
            //Figure out handling effects 
        } 
    }
}

export class Spell{

    constructor(private effect:effect){

    }
}

export class Wall{
    hp:number = 1; 
    alive:boolean = true;
    constructor(hp:number){
        this.hp = hp; 
    }

    setAlive(){
        this.alive = this.hp>0;
    }
}