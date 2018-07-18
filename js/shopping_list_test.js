const expect = chai.expect;
const should = chai.should();

describe('ShoppingListItem', function () {

  let newItem;

  before(function () {
    newItem = new ShoppingListItem('drugs', 'krokodil');
  })

  it('should be a class', function () {
    expect(newItem).to.be.instanceOf(ShoppingListItem);
  });

  it('should have property "name"', function () {
    expect(newItem).to.haveOwnProperty('name');
    expect(newItem.name).to.be.a('string');
  })

  it('should have property "description"', function () {
    expect(newItem).to.haveOwnProperty('description');
    expect(newItem.description).to.be.a('string');
  })

  it('should have property "is_done"', function () {
    expect(newItem).to.haveOwnProperty('is_done');
  })

  it('should be a boolean value', function () {
    expect(newItem.is_done).to.be.a('boolean');
  })
})