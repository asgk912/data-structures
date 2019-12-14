var BinarySearchTree = function(value) {
  // create the tree
  var binarySearchTree = {};
  //  value, right & left property
  binarySearchTree.val = value;
  binarySearchTree.right = null;
  binarySearchTree.left = null;
  // insert method
  binary.insert = function(value) {
    // check if the value is larger/smaller than the node value you are at
    // if smaller, check if larger/smaller than the left node
    //   if larger, insert
    //   if smaller, recursion
    // if larger, check if larger/smaller than the right node
    // if larger, recursion
    // if smaller, inser
  };
  // contain method
  binary.contain = function(value) {
    // declare boolean with false
    // check if the value found
    // check if the value is smaller/larger
    // if smaller, check  the left node
    //   recursion on left node
    // if larger, check the right node
    //   recursion on the right node
    // if children return true
  };
  // depthFirstLog();
  binary.depthFirstLog = function(cb) {
    // callback current node
    // if there is left node, depthFirstLog cb
    // if there is right node, depthFirstLog cb 
    // cb(binarySearchTree);
    // if(binarySearchTree.right !== null) {
    // }
  };

};


/*
 * Complexity: What is the time complexity of the above functions?
 */
