(function (w) {
  w.add.onclick = add_to_shopping_list;
  
  const myList = new ShoppingList();
  let contentDiv = document.getElementById('content');
  let renderList = myList.render();
  
  function add_to_shopping_list(){
    
    const itemName = document.getElementById('name').value;
    const itemNote = document.getElementById('description').value;
    let new_shopping_list_item = new ShoppingListItem(itemName, itemNote);
    
    myList.addItem(new_shopping_list_item);
    let renderList = myList.render();
    contentDiv.innerHTML = renderList + 'test';
  }
  // let checkBox = document.getElementById('check');
  w.onchange = changeCheckedStatus;
  function changeCheckedStatus(idx, checkbox){
    console.log(myList[idx])
    console.log(checkbox);
    if (checkbox.checked === true){
      new_shopping_list_item.check();
    } else {
      new_shopping_list_item.uncheck();
    }
  }

})(window);