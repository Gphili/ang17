import { MonsterType } from './../utils/monster.utils';
export class Monster {
name: string = " Monster";
image: string = "assets/img/pik.png"
type: MonsterType = MonsterType.ELECTRIC;
hp: number = 60;
figureCaption = "N°001 Monster";
attackName = "Standard Attack";
attackStrength: number = 10;
attackDescription: string = "This is a long description"
}