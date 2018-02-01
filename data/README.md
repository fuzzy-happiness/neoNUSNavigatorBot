# NUSNavigatorBot's data

`datadump-cleaned.json` contains PHP `var_dump()` data from
http://map.nus.edu.sg/index.php/search/, converted into a json using some
magical regex-es, and then cleaned up by parsing it in Node and removing
irrelevant fields.

Some observations:
- `tbl` possible values : `[ 'atm', 'building', 'faculty', 'room', 'facilities', 'bus_stop', 'carpark', 'food_outlet', 'lecture', 'residential', 'security', 'services', 'sos' ]`
