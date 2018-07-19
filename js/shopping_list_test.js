const expect = chai.expect;
const should = chai.should();
const unwantedChar = ['{', '}', '[', ']', '!', '@', '#', '$', "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "/", "|", "<", ">", ".", ",", ";", ":", "'", "`", "~"]


describe('ShoppingListItem', function () {

  let newItem;

  before(function () {
    newItem = new ShoppingListItem('drugs', 'krokodil');
  })

  it('should be a class', function () {
    expect(newItem).to.be.instanceOf(ShoppingListItem);
  });

  it('should have property "name"', function () {
    expect(newItem).to.have.property('name');
    expect(newItem.name).to.be.a('string');
    expect(newItem.name.split('')).to.not.include(unwantedChar);
    expect(newItem.name.length).to.be(newItem.name.length >= 1);
  })

  it('should have property "description"', function () {
    expect(newItem).to.have.property('description');
    expect(newItem.description).to.be.a('string');
  })

  it('should have property "is_done"', function () {
    expect(newItem).to.have.property('is_done');
    expect(newItem.is_done).to.be.a('boolean');
  })

  describe('Methods', function () {
    describe('check', function () {
      it('should have check method', function () {
        expect(newItem).to.have.property('check');
        newItem.check();
        expect(newItem.is_done).to.equal(true);
      })
    })

    describe('uncheck', function () {
      it('should have uncheck method', function () {
        expect(newItem).to.have.property('uncheck');
        newItem.uncheck();
        expect(newItem.is_done).to.deep.equal(false);
      })
    })

    describe('render', function () {
      it('should have render method', function () {
        expect(newItem).to.have.property('render');
        newItem.render();
        expect(newItem.render()).to.be.a('string');
      })
    })
  })
});




describe('ShoppingList', function() {
  let newList;
  let testItem;
  let dumbItem;

  before(function () {
    newList = new ShoppingList();
    testItem = new ShoppingListItem('drugs', 'isDank');
    dumbItem = {};
  })

  it('should be a class', function () {
    expect(newList).to.be.instanceOf(ShoppingList);
  }); 

  it('should have a property named "items" that is an empty array', function () {
    expect(newList).to.have.property('items');
    expect(newList.items).to.be.an('array');
    expect(newList.items.length).to.equal(0);
  })

  it('should have method addItem', function(){
    expect(newList).to.have.property('addItem');
    expect(newList.addItem).to.be.a('function');
    newList.addItem(testItem);
    expect(newList.items).to.include(testItem);
    expect(() => newList.addItem()).to.throw('Invalid');
  })

  it('should have method removeItem', function(){
    expect(newList).to.have.property('removeItem');
    expect(newList.removeItem).to.be.a('function');
    newList.removeItem(testItem);
    expect(newList.items).to.not.include(testItem);
    expect(() => newList.removeItem()).to.throw('Invalid');
  })

  it('should have method render', function() {
    newList.addItem(testItem);
    newList.addItem(testItem);
    expect(newList).to.have.property('render');
    expect(newList.render).to.be.a('function');
    expect(newList.render()).to.be.a('string');

  })
})


