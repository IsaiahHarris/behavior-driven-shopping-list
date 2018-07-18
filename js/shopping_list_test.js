const expect = chai.expect;
const should = chai.should();

describe('ShoppingListItem', function () {

  let shoppingListItem;

  before(function () {
    shoppingListItem = new shoppingListItem(name, description);
  })

  it('should be a class', function () {
    expect(ShoppingListItem).to.be.a('function');
  });

  it('should have property "name"', function () {
    expect('ShoppingListItem').to.haveOwnProperty('name');
    expect(shoppingListItem.name).to.be.a('string');
  })

  it('should have property "description"', function () {
    expect('ShoppingListItem').to.haveOwnProperty('description');
    expect(shoppingListItem.description).to.be.a('string');
  })

  it('should have property "is_done"', function () {
    expect('ShoppingListItem').to.haveOwnProperty('is_done');
  })

  it('should be a boolean value', function () {
    expect('is_done').to.be.a('boolean');
  })
})