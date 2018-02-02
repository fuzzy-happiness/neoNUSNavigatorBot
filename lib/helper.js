class Helper {
  static arrRenameKey(arr, oldKey, newKey) {
    return arr.map((obj) => {
      if (oldKey !== newKey || Object.prototype.hasOwnProperty.call(obj, oldKey)) {
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
      }
      return obj;
    });
  }
  static distance(loc1, loc2) {
    // Using Pythagoras
    return Math.sqrt(((loc1.lat - loc2.lat) ** 2) + ((loc1.long - loc2.long) ** 2));
  }
}

module.exports = Helper;
