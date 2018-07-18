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

  render() {
    return `<li class = "completed_${this.is_done}"><span>${this.name}</span><span>Must be dank</span></li>`
  }
}


