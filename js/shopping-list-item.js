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
    return ` <li class = "completed_${this.is_done}"><span class = 'check-container'> <input id='check' ${setCheckbox(this.is_done)} type="checkbox" onchange = "changeCheckedStatus(event, ${i})"  /></span> <span >${this.name} </span><span>${this.description}</span><button id='remove' onclick="removeItemButtonClicked(${i})">Remove Item</button></li>`
  } 
}

function setCheckbox(done){
  if (done) {
    return 'checked';
  } else {
    return '';
  }
}



