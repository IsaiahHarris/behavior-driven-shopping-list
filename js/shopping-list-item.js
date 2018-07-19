class ShoppingListItem {
  constructor(name, description) {
    this.name = name;
    this.description = description;
    this.is_done = false;
  }

  check() {
    this.is_done = true;
  }

  uncheck() {
    this.is_done = false;
  }

  render(i) {
    return ` <li class = "completed_${this.is_done}"><span class = 'check-container'> <input type="checkbox" onchange = "changeCheckedStatus(event, ${i})" id='check' /></span> <span >${this.name} </span><span>${this.description}</span><button id='remove' onclick="removeItemButtonClicked(${i})">Remove Item</button></li>`
  } 
}



