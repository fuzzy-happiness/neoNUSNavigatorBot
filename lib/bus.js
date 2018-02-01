const BASE_URL = 'http://nextbus.comfortdelgro.com.sg/testMethod.asmx/';
const request = require('request');

class Bus {
  constructor() {
    this.busStops = Bus.getBusStops();
  }
  search(keyword) {
    return this.busStops.filter(bs => bs.includes(keyword));
  }
  static getBusStops() {
    return Bus.api('getBusStops').BusStopsResult.busstops;
  }
  static api(action, param = {}) {
    request.post(
      { url: BASE_URL + action, form: param },
      (err, response, body) => Bus.parse(body),
    );
  }
  // Remove the XML part and parse the JSON
  static parse(body) {
    // some magical thing
    return JSON.parse(body.split('>')[2].split('<')[0]);
  }
}

module.exports = Bus;
