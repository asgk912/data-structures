var BinarySearchTree = function(value) {
  // create the tree
  var binarySearchTree = {};
  //  value, right & left property
  binarySearchTree.value = value;
  binarySearchTree.right = null;
  binarySearchTree.left = null;
  // insert method
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
        // if right is not null binsarySearchTree.insert on the right
      } else {
        binarySearchTree.right.insert(value);
      }
      
    }
  };
  // contain method
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
  return binarySearchTree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
