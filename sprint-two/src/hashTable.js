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
  
  // check to if there is too many entry
  if (this._entries >= 0.75 * this._limit) {
    this.resize(this._limit * 2);
  }
  // if too many resize
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
  //check if it contains k
  //if it contains k, delete the pair
  if (subStorage !== undefined) {
    for (var i = 0; i < subStorage.length; i++) {
      if (subStorage[i][0] === k) {
        this._storage[index] = subStorage.splice(i, 1);
        this._entries--;
        break;
      }
    }
  }
  
  // check if we have few entries relative to size
  // resize if it does
  if (this._entries <= 0.25 * this._limit) {
    var newSize = Math.max(8, Math.ceil(this._limit / 2));
    this.resize(newSize);
  }
};

HashTable.prototype.resize = function(newSize) {
  // create a new hashtable
  var newHash = new HashTable(newSize);
  // map old hash table to new has table
  this.forEach(function (key, value) {
    newHash.insert(key, value);
  });
  this._storage = newHash._storage;
  this._limit = newHash._limit;
  //   get element out old hash table
  //   put element into new hash table
  //   stop when we added all elements
  // replace old hash table with new one
};

HashTable.prototype.forEach = function(iterator) {
  // visit eah box in limited array
  //   visit each box in substorage substorage array
  //     run iterator on the box

  for (var i = 0; i < this._limit; i++) {
    var subStorage = this._storage.get(i);
    if (subStorage !== undefined) {
      for (var j = 0; j < subStorage.length; j++) {
        iterator(subStorage[j][0], subStorage[j][1]);
      }
    }
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


