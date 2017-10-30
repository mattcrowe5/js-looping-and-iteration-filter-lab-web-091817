// Code your solution in this file
function findMatching(list, name){
  return list.filter(function (driverName){
    return driverName.toLowerCase() === name.toLowerCase();
  });
}

function fuzzyMatch(list, letters) {
  let nameLength = letters.length
  return list.filter(function(driverName) {
    return driverName.slice(0, nameLength) === letters
  });
}

function matchName(list, name) {
  return list.filter(function(driver){
    return driver.name === name
  });
}
