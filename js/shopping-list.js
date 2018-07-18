class ShoppingList{
  constructor(){
    this.items = [];
  }

  addItem (item) {
    this.items.push(item);
  }

  removeItem (item) {
    let indexOfItem = this.items.indexOf(item);
    this.items.splice(indexOfItem, 1);
  }
}

