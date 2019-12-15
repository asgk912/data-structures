describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3, 7]);
  });

  it('should correctly classify balance type: LeftLeft', function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(1);
    var balanceType = binarySearchTree.howUnbalanced();
    expect(balanceType).to.equal('LeftLeft');
  });
  it('should correctly classify balance type: LeftRight', function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(4);
    var balanceType = binarySearchTree.howUnbalanced();
    expect(balanceType).to.equal('LeftRight');
  });
  it('should correctly classify balance type: RightLeft', function() {
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    var balanceType = binarySearchTree.howUnbalanced();
    expect(balanceType).to.equal('RightLeft');
  });
  it('should correctly classify balance type: RightRight', function() {
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    var balanceType = binarySearchTree.howUnbalanced();
    expect(balanceType).to.equal('RightRight');
  });
  it('should correctly classify balance type: balanced', function() {
    binarySearchTree.insert(7);
    binarySearchTree.insert(1);
    var balanceType = binarySearchTree.howUnbalanced();
    expect(balanceType).to.equal('balanced');
  });
});
