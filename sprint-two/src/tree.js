var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // Declare child "tree" with input: value
  var child = Tree(value);
  // push with child tree to children list
  this.children.push(child);
};

treeMethods.contains = function(target) {
  // declare boolean
  var hasTarget = false;
  // check current node for value
  
  var childrenContains = function(tree) {
    if (tree.value === target) {
      hasTarget = true;
    } 
    if (tree.children.length > 0) {
      for (let i = 0; i < tree.children.length; i++) {
        childrenContains(tree.children[i]);
      }
    } 
  };
  childrenContains(this);
  

  
  // check if it has children
  // if it does, then loop through children list and run contains on the list
  return hasTarget;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
