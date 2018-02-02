const Bus = require('./bus');
const Building = require('./building');

class Data {
  constructor(type) {
    switch (type) {
      case 'bus':
        this.data = new Bus();
        break;
      case 'building':
        this.data = new Building();
        break;
      default:
        throw new Error('lib/data: type not defined');
    }
  }
  search(keyword) {
    return this.data.search(keyword);
  }
  findNearest(loc) {
    if (typeof loc.lang === 'number' && typeof loc.lat === 'number') {
      this.data.findNearest(loc);
    } else {
      throw new Error('lib/data: invalid location');
    }
  }
}

module.exports = Data;
