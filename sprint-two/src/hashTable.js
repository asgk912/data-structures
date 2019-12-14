var HashTable = function(limit) {
  this._limit = limit || 8;
  this._storage = LimitedArray(this._limit);
  this._entries = 0;
};

// time complexity: O(1) on average / O(n) at worst 
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
    this._entries++;
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
    this._entries++;
  }
  this._storage.set(index, subStorage);
  // push this array into the storage array of box index
};

// time complexity: O(1) on average / O(n) at worst
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

// time complexity: O(1) on average / O(n) at worst
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //access the storage of the index
  var subStorage = this._storage.get(index);
  //loop through the sub-array
  if (subStorage !== undefined) {
    for (var i = 0; i < subStorage.length; i++) {
      if (subStorage[i][0] === k) {
        this._storage[index] = subStorage.splice(i, 1);
        this._entries--;
        break;
      }
    }
  }
  //check if it contains k
  //if it contains k, delete the pair
};

HashTable.prototype.resize = function(newSize) {
  // check if limit is 8 or not
  // figure out new size of hash table
  // create a new limited array with new size
  var newStorage = LimitedArray(newSize);
  // loop through all the old limited array
  for (var i = 0; i < this._limit; i++) {
    var subStorage = this._storage.get(i);
    for (var j = 0; j < subStorage.length; j++) {
      //get a key and value  
      
    }
  }
  // for each element, set values into new limited array
  // reset limit of the hashTable to new size
  // reset storage of the hashTable to new limited array
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


