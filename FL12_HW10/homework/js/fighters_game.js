/* Your code goes here */
let oneHundredOne = 101;
function Fighter(fighterObject) {
  this._name = fighterObject.name;
  this._strength = fighterObject.strength;
  this._agility = fighterObject.agility;
  this._damage = fighterObject.damage;
  this._hp = fighterObject.hp;
  this.getName = function () {
    return this._name;
  }
  this.getStrength = function () {
    return this._strength;
  }
  this.getAgility = function () {
    return this._agility;
  }
  this.getDamage = function () {
    return this._damage;
  }
  this.getHp = function () {
    return this._hp;
  }
  this.attack = function (fighter) {
    let randomNumber = Math.floor(Math.random() * oneHundredOne);
    let sumStrengthAndAgility = fighter.getStrength() + fighter.getAgility();
    if (sumStrengthAndAgility > randomNumber) {
      let HpAfterAttack = fighter.getHp() - fighter.getDamage();
      console.log(fighter.getName() + ' makes ' + fighter.getDamage() + ' damage to ');
      console.log('HP після атаки' + HpAfterAttack);
      return HpAfterAttack;
    } else {
      console.log(fighter.getName() + ' attack missed');
    }
  }
}
const fighter1 = new Fighter({
  name: 'Maximus',
  damage: 25,
  hp: 100,
  strength: 30,
  agility: 20
});
const fighter2 = new Fighter({
  name: 'Commodus',
  damage: 20,
  hp: 100,
  strength: 20,
  agility: 20
});
function battle(fighter1, fighter2) {
  let hpfighter1 = fighter1.getHp();
  let hpfighter2 = fighter2.getHp();
  while (hpfighter1 > 0 && hpfighter2 > 0) {
    fighter1.attack(fighter2);
    fighter2.attack(fighter1);
    hpfighter1 -= fighter2.getDamage();
    hpfighter2 -= fighter1.getDamage();
  }
}
battle(fighter1, fighter2);
