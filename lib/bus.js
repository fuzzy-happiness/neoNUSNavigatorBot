/* eslint no-param-reassign: ["error", { "props": false }] */
const BASE_URL = 'http://nextbus.comfortdelgro.com.sg/testMethod.asmx/';
const request = require('request');
const helper = require('./helper');

class Bus {
  constructor() {
    Bus.obtainBusStops(this);
  }
  search(keyword) {
    return this.busStops.filter(bs => bs.name.includes(keyword));
  }
  static obtainBusStops(obj) {
    Bus.api(obj, () => {
      obj.busStops = helper.arrRenameKey(obj.temp.BusStopsResult.busstops, 'caption', 'name');
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
