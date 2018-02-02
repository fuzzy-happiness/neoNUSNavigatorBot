class Helper {
  static arrRenameKey(arr, oldKey, newKey) {
    return arr.map(obj => {
      if (oldKey !== newKey || obj.hasOwnProperty(oldKey)) {
        obj[newKey] = obj[oldKey];
        delete obj[oldKey];
      }
      return obj;
    });
  }
}

module.exports = Helper;
