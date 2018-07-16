'use strict';

var get_intersection = require('../../practices/collectionOperator/get_intersection.js');

var collection_a = [10, 27, 28, 19, 5];
var collection_b = [5, 78, 28, 19, 23];
var collection_c = [5, 28, 19];

var result = get_intersection(collection_a, collection_b);

describe('get_intersection', function () {

  it('弹出两个集合的交集', function() {
    expect(result).toEqual(collection_c);
  });
});

