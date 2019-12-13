var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // create an arry of length 2 with key value pair in array form
  var pair = [k, v];
  var subStorage = this._storage.get(index);
  var updated = false;
  // check to see there is an array (or undefined)
  if (subStorage === undefined) {
    //if no array create array
    subStorage = [pair];
    updated = true;    
  }
  // check to see if there is in substroage
  
  for (var i = 0; i < subStorage.length; i++) {
    if (subStorage[i][0] === k) {
      subStorage[i][1] = v;
      updated = true;
      break;
    }
  }
  // make sure array does not exist (loop) 
  //   if it exsits, update
  //   if not, (next lines)
  if (!updated) {
    subStorage.push(pair);
  }
  this._storage.set(index, subStorage);
  // push this array into the storage array of box index
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //access the storage of the index
  var subStorage = this._storage.get(index);
  //loop through the sub-array and check if contains k
  //if it does save the paired value to k in a variable, return that value;
  if (subStorage !== undefined) {
    for (var i = 0; i < subStorage.length; i++) {
      if (subStorage[i][0] === k) {
        return subStorage[i][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //access the storage of the index
  var subStorage = this._storage.get(index);
  //loop through the sub-array
  if (subStorage !== undefined) {
    for (var i = 0; i < subStorage.length; i++) {
      if (subStorage[i][0] === k) {
        this._storage[index] = subStorage.splice(i, 1);
        break;
      }
    }
  }
  //check if it contains k
  //if it contains k, delete the pair
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


