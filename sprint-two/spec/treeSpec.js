describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  it('should correctly detect larger nested children', function() {
    tree.addChild(1);
    tree.children[0].addChild(11);
    tree.children[0].addChild(12);
    tree.children[0].addChild(13);
    tree.children[0].addChild(14);
    tree.addChild(2);
    tree.children[1].addChild(21);
    tree.children[1].addChild(22);
    tree.children[1].children[0].addChild(221);
    tree.children[1].children[0].children[0].addChild(2211);
    tree.children[1].addChild(23);
    tree.children[1].addChild(24);
    tree.addChild(3);
    tree.children[2].addChild(31);
    tree.children[2].addChild(32);
    tree.children[2].children[0].addChild(121);
    tree.children[2].addChild(33);
    tree.children[2].addChild(34);
    tree.addChild(4);
    tree.children[3].addChild(11);
    tree.children[3].addChild(12);
    tree.children[3].addChild(13);
    tree.children[3].addChild(14);
    expect(tree.contains(121)).to.equal(true);
    expect(tree.contains(2211)).to.equal(true);
  });


});
