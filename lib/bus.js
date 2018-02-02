const BASE_URL = 'http://nextbus.comfortdelgro.com.sg/testMethod.asmx/';
const request = require('request');
const helper = require('./helper');

class Bus {
  constructor() {
    Bus.obtainBusStops(this);
  }
  search(keyword) {
    const kw = keyword.toLowerCase();
    return this.busStops.filter(bs =>
      bs.caption.toLowerCase().includes(kw) || bs.name.toLowerCase().includes(kw));
  }
  findNearest(loc) {
    const min = { distance: Infinity };
    this.busStops.forEach((a) => {
      const distance = helper.distance(a, loc);
      if (min.distance > distance) {
        min.distance = distance;
        min.obj = a;
      }
    });
    return min.obj;
  }
  static obtainBusStops(obj) {
    Bus.api(obj, () => {
      obj.busStops = obj.temp.BusStopsResult.busstops;
      obj.busStops = helper.arrRenameKey(obj.busStops, 'longitude', 'long');
      obj.busStops = helper.arrRenameKey(obj.busStops, 'latitude', 'lat');
    }, 'GetBusStops');
  }
  static api(obj, callback, action, param = {}) {
    obj.temp = undefined;
    request.post(
      { url: BASE_URL + action, form: param },
      (err, response, body) => {
        obj.temp = Bus.parse(body);
        callback();
      },
    );
    while (obj.temp !== undefined) { // Loop until the data is ready
      (() => {})();
    }
  }
  // Remove the XML part and parse the JSON
  static parse(body) {
    // some magical thing
    return JSON.parse(body.split('>')[2].split('<')[0]);
  }
}

module.exports = Bus;
