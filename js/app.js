(function (w) {
  w.add.onclick = add_to_shopping_list;
  
  const myList = new ShoppingList();
  let contentDiv = document.getElementById('content');
  
  function add_to_shopping_list(){
    
    const itemName = document.getElementById('name').value;
    const itemNote = document.getElementById('description').value;
    let new_shopping_list_item = new ShoppingListItem(itemName, itemNote);
    
    myList.addItem(new_shopping_list_item);
    let renderList = myList.render();
    contentDiv.innerHTML = renderList;
  }
  // let checkBox = document.getElementById('check');
  w.changeCheckedStatus = function (event, i) {
    let item = myList.items[i];
    if(event.target.checked === true){
      item.check();
    } else {
      item.uncheck();
    }
  }

  w.removeItemButtonClicked = function (i) {
    let item = myList.items[i];
    myList.removeItem(item);
  }

})(window);