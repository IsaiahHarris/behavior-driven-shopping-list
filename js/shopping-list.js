class ShoppingList{
  constructor(){
    this.items = [];
  }

  addItem (item) {
    if (!(item instanceof ShoppingListItem)){
      throw 'Invalid'
    } else {
      this.items.push(item);
    }
  }

  removeItem (item) {
    if (!(item instanceof ShoppingListItem)){
      throw 'Invalid'
    } else {
      let indexOfItem = this.items.indexOf(item);
      this.items.splice(indexOfItem, 1);
    }
  }
  render(){
    let concatArr = this.items.map(element => element.render()).join('');
    return `<ul>${concatArr}</ul>`
  }
}

