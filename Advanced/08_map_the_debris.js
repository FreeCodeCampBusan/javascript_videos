// YouTube: https://youtu.be/DQxLcQKVkP4

// solution using forEach. We change the objects on the fly
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  arr.forEach(function(obj) {
    var orbPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + obj.avgAlt,3)/GM));
    obj.orbitalPeriod = orbPeriod;
    delete obj.avgAlt;
  });

  return arr;
}

// solution using reduce(). We push a newly created object to the accumulator
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  return arr.reduce(function(acc, obj) {
    var orbPeriod = Math.round(2*Math.PI*Math.sqrt(Math.pow(earthRadius + obj.avgAlt,3)/GM));
    acc.push({name: obj.name, orbitalPeriod: orbPeriod});
    return acc;
  }, []);
}
