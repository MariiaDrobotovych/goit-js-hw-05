// const Account = function ({login, email}) {
//   this.login = login;
//   this.email = email;
// }

// Account.prototype.getInfo = function () {
//   console.log(`Login: ${this.login}, Email: ${this.email}`)
// }

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//   login: 'Mangozedog',
//   email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//   login: 'Poly',
//   email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com

const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName.name) {
        return `Зелье ${potionName.name} уже есть в инвентаре!`;
      }
    }
    this.potions.push(potionName);
    return this.potions;
  },
  removePotion(potionName) {
    const potionIndex = this.potions.indexOf(potionName.name);
    for (const potion of this.potions) {
      if (potion.name === potionName.name) {
        return `Зелья ${potionName.name} нет в инвентаре!`;
      }
    }

    return this.potions.splice(potionIndex, 1);

    // const potionIndex = this.potions.indexOf(potionName);

    // if (potionIndex === -1) {
    //   return `Зелья ${potionName} нет в инвентаре!`;
    // }

    // this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    const potionIndex = this.potions.indexOf(oldName);

    if (potionIndex === -1) {
      return `Зелья ${oldName} нет в инвентаре!`;
    }

    this.potions.splice(potionIndex, 1, newName);
  },
  // Пиши код выше этой строки
};

console.log(atTheOldToad.getPotions());
console.log(atTheOldToad.addPotion({ name: 'Невидимка', price: 620 }));
console.log(atTheOldToad.addPotion({ name: 'Зелье силы', price: 270 }));
console.log(atTheOldToad.removePotion('Дыхание дракона'));
console.log(atTheOldToad.removePotion('Зелье скорости'));
console.log(atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф'));
console.log(atTheOldToad.updatePotionName('Каменная кожа', 'Зелье неуязвимости'));