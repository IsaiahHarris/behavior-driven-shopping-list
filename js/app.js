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
})(window);