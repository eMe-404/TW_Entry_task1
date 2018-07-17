'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var countedNames = collection.reduce(function (allCount, name) {
    if (name in allCount) {
      allCount[name]++;
    }
    else {
      allCount[name] = 1;
    }
    return allCount;
  }, {});

}

module.exports = grouping_count;
