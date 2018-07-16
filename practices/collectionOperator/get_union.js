'use strict';

function get_union(collection_a, collection_b) {
  //在这里写入代码
  let result = collection_a;
   collection_b.forEach(value => {
    if (!collection_a.includes(value)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = get_union;

