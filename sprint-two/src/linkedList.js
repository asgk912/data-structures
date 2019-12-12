var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // find tail (make sure handling empty chain)
    // var activeNode = list.tail;
    //make a new node with value
    var newNode = Node(value);
    //link the node to active node
    // activeNode.next = newNode;    
    //assign the node to the tail
    // list.tail = newNode;
    list.tail.next = newNode;
    // if tail is not node, this wil fail
  };

  list.removeHead = function() {
    // find head (make sure handling empty chain)
    // assign head value to variable
    // delete head
    //assign list with rest
    //assign new value to the head
    // return old head value
  };

  list.contains = function(target) {
    // step through chain 
    // if found value, return true
    // otherwise return false

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
