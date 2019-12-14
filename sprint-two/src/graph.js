// Instantiate a new graph
var Graph = function() {
};

// Add a node to the graph, passing in the node's value.
// time complexity: O(1)
Graph.prototype.addNode = function(node) {
  this[node] = {};
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
// time complexity: O(1)
Graph.prototype.contains = function(node) {
  return (this[node] !== undefined);
};

// Removes a node from the graph.
// time complexity: O(n)
Graph.prototype.removeNode = function(node) {
  delete this[node];
  for (var restNode in this) {
    delete this[restNode][node];
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
// time complexity: O(1)
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (this[fromNode] === undefined || this[toNode] === undefined) {
    return false;
  }
  return (this[fromNode][toNode] !== undefined);
};

// Connects two nodes in a graph by adding an edge between them.
// time complexity: O(1)
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this[fromNode] !== undefined && this[toNode] !== undefined) {
    this[fromNode][toNode] = toNode;
    this[toNode][fromNode] = fromNode;
  }
};

// Remove an edge between any two specified (by value) nodes.
// time complexity: O(1)
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this[fromNode][toNode];
  delete this[toNode][fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
// time complexity: O(n)
Graph.prototype.forEachNode = function(cb) {
  for (var node in this) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */