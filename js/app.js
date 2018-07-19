(function (w) {

  let savedToDoContent = null;
  let savedShoppingContent = null;
  const myList = new ShoppingList();
  let contentDiv = document.getElementById('content');

  w.add.onclick = add_to_shopping_list;


  function add_to_shopping_list() {
    let itemName = document.getElementById('name').value;
    let itemNote = document.getElementById('description').value;
    let new_shopping_list_item = new ShoppingListItem(itemName, itemNote);
    myList.addItem(new_shopping_list_item);
    let renderList = myList.render();
    contentDiv.innerHTML = renderList;
  }

  w.changeCheckedStatus = function (event, i) {
    let item = myList.items[i];
    if (event.target.checked === true) {
      item.check();
    } else {
      item.uncheck();
    }
    contentDiv.innerHTML = myList.render();
    console.log(event)
  }

  w.removeItemButtonClicked = function (i) {
    let item = myList.items[i];
    myList.removeItem(item);
    contentDiv.innerHTML = myList.render();
  }

  let toDoButton = document.getElementById('to-do-list-id');
  let shoppingButton = document.getElementById('shopping-list-id');

  toDoButton.addEventListener('click', toDoPageFunc);
  shoppingButton.addEventListener('click', shoppingPageFunc);

  function toDoPageFunc() {
    savedShoppingContent = contentDiv.innerHTML;

    console.log(savedShoppingContent);
    console.log('this is shopping contentDiv');
    contentDiv.innerHTML = savedToDoContent;
  }

  function shoppingPageFunc() {
    savedToDoContent = contentDiv.innerHTML;

    console.log(savedToDoContent);
    console.log('this is todocontent');
    contentDiv.innerHTML = savedShoppingContent;
  }

})(window);