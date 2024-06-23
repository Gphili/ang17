import { Component, computed, effect, model, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bindCallback } from 'rxjs';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { Monster } from './models/monster.model';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MonsterType } from './utils/monster.utils';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,PlayingCardComponent,SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'playing-cards';

  monsters!: Monster[];
  /* monster1!: Monster;
  count: number = 0;
  search = '';
  selectedMonsterIndex = signal(1);
  selectedMonster = computed(() => {
    return this.monsters[this.selectedMonsterIndex()];
  })
*/
search = model('');
filteredMonsters = computed(() => { //computed signal
  return this.monsters.filter(monster => monster.name.includes(this.search()));
})


  constructor() {

   /* effect(() => {
      console.log(this.selectedMonster());
    })
   */

    // this.monster1 = new Monster();
    // this.monster1.name = "Pik";
    // this.monster1.hp = 40;
    // this.monster1.figureCaption = "N°002 Pik"

    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = "Pik";
    monster1.hp = 40;
    monster1.figureCaption = "N°002 Pik"
    this.monsters.push(monster1)

    const monster2 = new Monster();
    monster2.name = "Car";
    monster2.image = "assets/img/pik.png";
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
    monster2.figureCaption = "N°003 Pik"
    this.monsters.push(monster2)

    const monster3 = new Monster();
    monster3.name = "Bulb";
    monster3.image = "assets/img/plant.png";
    monster3.type = MonsterType.PLANT;
    monster3.hp = 60;
    monster3.figureCaption = "N°004 Pik"
    this.monsters.push(monster3)

    const monster4 = new Monster();
    monster4.name = "Sala";
    monster4.image = "assets/img/fire.png";
    monster4.type = MonsterType.FIRE;
    monster4.hp = 60;
    monster4.figureCaption = "N°005 Pik"
    this.monsters.push(monster4)
  }

/*  increaseCount() {
    this.count++;
  }

  toggleMonster(){
    // this.selectedMonsterIndex = (this.selectedMonsterIndex + 1) % (this.monsters.length)
    this.selectedMonsterIndex.set((this.selectedMonsterIndex() + 1) % (this.monsters.length))
  } */
}
