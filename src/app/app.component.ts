import { Component } from '@angular/core';
import { Card, Creature, Type } from './card';
import { Hoard, Player } from 'src/app/player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  creature: Creature = new Creature(1, 1, 1, 0, "Knight", Type.Creature, 3, "black", "", "", []);
  creature2: Creature = new Creature(1, 1, 1, 0, "Knight", Type.Creature, 3, "black", "", "", []);
  creature3: Creature = new Creature(1, 1, 1, 0, "Knight", Type.Creature, 3, "black", "", "", []);

  creature4: Creature = new Creature(1, 1, 1, 0, "Knight", Type.Creature, 3, "black", "", "", []);
  creature5: Creature = new Creature(1, 1, 1, 0, "Knight", Type.Creature, 3, "black", "", "", []);
  creature6: Creature = new Creature(1, 1, 1, 0, "Knight", Type.Creature, 3, "black", "", "", []);

  p_deck: Card[] = [this.creature, this.creature2, this.creature3]
  a_deck: Card[] = [this.creature4, this.creature5, this.creature6]
  title = 'CardApp';
  player: Player = new Player();
  enemy: Hoard = new Hoard();
  card: Card = new Card(0, "Hello World", Type.Spell, 3, "red", "", "This is some sample text!", [])

  constructor() {

    this.player.deck = this.p_deck;
    this.enemy.deck = this.a_deck;
    this.player.drawCards(2);
    this.enemy.playCards(this.enemy.deck);
    console.log(this.player.deck[0])
  }

}