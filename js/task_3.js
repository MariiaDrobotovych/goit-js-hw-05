class Storage {
    constructor(item) {
        this.item = item; 
    }

    getItems() {
        return this.item;
    }

    addItem(newItem) {
        return this.item.push(newItem);
    } 

    removeItem(itemToRemove) {
        for (const one of this.item) {
            if (one === itemToRemove) {
                const index = this.item.indexOf(itemToRemove);
                return this.item.splice(index, 1);
            }
        }
        return this.item;
    }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]