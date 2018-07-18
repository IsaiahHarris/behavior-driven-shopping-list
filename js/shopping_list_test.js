const expect = chai.expect;
const should = chai.should();

describe('ShoppingListItem', function () {


  it('should be a class', function () {
    expect('ShoppingListItem').to.be.a('class');
  })

  it('should have property "name"', function () {
    expect('ShoppingListItem').to.haveOwnProperty('name');
  })

  it('should have property "description"', function () {
    expect('ShoppingListItem').to.haveOwnProperty('description');
  })

  it('should have property "is_done"', function () {
    expect('ShoppingListItem').to.haveOwnProperty('is_done');
  })
})