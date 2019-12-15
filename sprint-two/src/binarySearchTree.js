var BinarySearchTree = function(value) {
  // create the tree
  var binarySearchTree = {};
  //  value, right & left property
  binarySearchTree.value = value;
  binarySearchTree.right = null;
  binarySearchTree.left = null;
  
  // insert method
  // time complexity: perfectly blanced: O(log n) / completely unbalanced: O(n)
  binarySearchTree.insert = function(value) {
    var treeToInsert = BinarySearchTree(value);  
    // if value is smaller than the node value 
    if (value < binarySearchTree.value) {
      // if left is null, insert at the left tail
      if (binarySearchTree.left === null) {
        binarySearchTree.left = treeToInsert;
        // if left is not null binarySearchTree.insert on left 
      } else {
        binarySearchTree.left.insert(value);
      }
    }
    // if value is larger than the node value 
    if (binarySearchTree.value < value) {
      //   if right is null insert at the right tail
      if (binarySearchTree.right === null) {
        binarySearchTree.right = treeToInsert;
        // if right is not null binarySearchTree.insert on the right
      } else {
        binarySearchTree.right.insert(value);
      }
      
    }
  };

  // contain method
  // time complexity: perfectly blanced: O(log n) / completely unbalanced: O(n)
  binarySearchTree.contains = function(value) {
    // check if the value found
    if ( value === binarySearchTree.value ) {
      return true;
    } 
    // check if the value is smaller/larger
    if ( value < binarySearchTree.value) {
      if (binarySearchTree.left === null) {
        return false;
      } else {
        return binarySearchTree.left.contains(value);
      }
    }

    if ( binarySearchTree.value < value) {
      if (binarySearchTree.right === null) {
        return false;
      } else {
        return binarySearchTree.right.contains(value);
      }
    }

  };
  // depthFirstLog();
  // time complexity: always O(n)
  binarySearchTree.depthFirstLog = function(cb) {
    // callback current node
    cb(binarySearchTree.value);
    // if there is left node, depthFirstLog cb
    if (binarySearchTree.left !== null) {
      binarySearchTree.left.depthFirstLog(cb);
    }
    // if there is right node, depthFirstLog cb 
    if (binarySearchTree.right !== null) {
      binarySearchTree.right.depthFirstLog(cb);
    }
    
  };

  binarySearchTree.hasRightChildOnly = function () {
    return binarySearchTree.left === null && binarySearchTree.right !== null;
  };

  binarySearchTree.hasLeftChildOnly = function () {
    return binarySearchTree.left !== null && binarySearchTree.right === null;
  };
  
  binarySearchTree.howUnbalanced = function() {
    // return true if one childe and one grandchild
    //   if one child, go on
    //      if one child has one child, true
    //      if not, false
    //   if no child or both child, return false
    if (binarySearchTree.hasLeftChildOnly()) {
      if (binarySearchTree.left.hasLeftChildOnly()) {
        return 'LeftLeft';
      } else if (binarySearchTree.left.hasRightChildOnly()) {
        return 'LeftRight';
      }
    } else if (binarySearchTree.hasRightChildOnly()) {
      if (binarySearchTree.right.hasLeftChildOnly()) {
        return 'RightLeft';
      } else if (binarySearchTree.right.hasRightChildOnly()) {
        return 'RightRight';
      }
    }
    return 'balanced';
  };
  
  binarySearchTree.rebalance = function() {
    var balanceType = binarySearchTree.howUnbalanced();
    switch (balanceType) {
    case 'LeftLeft': 
      // left node goes to right
      var newRightTreeValue = binarySearchTree.left.value;
      var newRightTree = BinarySearchTree(newRightTreeValue);
      binarySearchTree.right = newRightTree;
      // lefleft goes to left
      binarySearchTree.left = binarySearchTree.left.left;
      break;
    case 'LeftRight':
      // 
      break;
    case 'RightLeft': 
      break;
    case 'RightRight':
      // right node goes to left
      var newLeftTreeValue = binarySearchTree.left.value;
      var newLeftTree = BinarySearchTree(newLeftTreeValue);
      binarySearchTree.left = newLeftTree;
      // rightright goes to right
      binarySearchTree.right = binarySearchTree.right.right;
      break;
    case 'balanced':
      break;
    default:
      break;
    }
  };

  return binarySearchTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
