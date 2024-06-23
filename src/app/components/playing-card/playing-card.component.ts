import { MonsterType, MonsterTypeProperties } from './../../utils/monster.utils';
import { Component, input, Input, InputSignal, OnChanges, OnInit, SimpleChanges, computed } from '@angular/core';
import { Monster } from '../../models/monster.model';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent { //implements OnChanges
// @Input() name: string = "My Monster";
// @Input() hp: number = 40;
// @Input() figureCaption = "N°001 Monster";
// @Input() attackName = "Geo impact";
// @Input() attackStrength: number = 60;
// @Input() attackDescription: string = "This is a long description"

/*
@Input({
  // required : true
  alias : 'my-monster',
  transform: (value: Monster) => {
    value.hp = value.hp / 2;
    return value;
  }
}) monster: Monster = new Monster();
*/
// @Input() monster = new Monster();
monster = input(new Monster());

// monsterTypeIcon: string = "assets/img/electric.png"
// backgroundColor: string = "rgb(255,255,104)"
monsterTypeIcon = computed(() => {
  return MonsterTypeProperties[this.monster().type].imageUrl;
});

backgroundColor = computed(() => {
  return MonsterTypeProperties[this.monster().type].color;
});

// ngOnChanges(changes: SimpleChanges): void {
//   if(changes['monster']) {
//     if (changes['monster'].previousValue?.type != changes['monster'].currentValue.type) {
//       this.monsterTypeIcon = MonsterTypeProperties[this.monster().type].imageUrl;
//       this.backgroundColor = MonsterTypeProperties[this.monster().type].color;
//     }
//   }
// }


// monster: InputSignal<Monster> = input(new Monster(), {
//   alias: 'my-monster',
//   transform: (value: Monster) => {
//     value.hp = value.hp / 2;
//     return value
//   }
// });
//                                 //input.required();
}
 