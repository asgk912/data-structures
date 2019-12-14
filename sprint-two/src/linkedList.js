var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  // time complexity: O(1)
  list.addToTail = function(value) {
    var newNode = Node(value);
    if (list.tail === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      list.tail.next = newNode;
      list.tail = list.tail.next;
    }
    // if tail is not node, this will fail
  };

  // time complexity: O(1)
  list.removeHead = function() {
    if (list.head === null) {
      return null;
    } else {
      // capture the value of head node
      var headValue = list.head.value;
      // capture second node
      var secondNode = list.head.next;
      // assign head with second node
      // if head and tail are the same, set the tail to next node too
      if (JSON.stringify(list.head) === JSON.stringify(list.tail)) {
        list.tail = secondNode;
      }
      list.head = secondNode;
      // return the previous head node value
      return headValue;
    }
  };

  // time complexity: O(n)
  list.contains = function(target) {
    var node = list.head;
    while (node !== null) {
      if (node.value === target) {
        return true;
      } else {
        node = node.next;
      }
    }
    return false;
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
