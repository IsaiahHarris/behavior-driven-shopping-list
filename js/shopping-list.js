class ShoppingList{
  constructor(){
    this.items = [];
  }

  addItem (item) {
    if (!(item instanceof ShoppingListItem) || item.name.length < 1){
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
    let wholeList = '';
    for (let i = 0; i < this.items.length; i++){
      wholeList += this.items[i].render(i);
    };
    return `<ul>${wholeList}</ul>`
  }
}

