const assert = require('assert');
const calculateStringSize = require('../main.js').calculateStringSize;
const calculateNumberSize = require('../main.js').calculateNumberSize;
const calculateBooleanSize = require('../main.js').calculateBooleanSize;
const calculateNullSize = require('../main.js').calculateNullSize;
const calculateObjectSize = require('../main.js').calculateObjectSize;
const calculateArraySize = require('../main.js').calculateArraySize;

describe('calculate size', () => {
  let testObject = {};

  before(() => {
    testObject['string'] = 'abc';
    testObject['integerNumber'] = 123;
    testObject['floatNumber'] = 123.45;
    testObject['boolean'] = true;
    testObject['array'] = ['element1', 'element2', 'element3'];
    testObject['object'] = { string: 'abc', integer: 123, boolean: true }; // 9+7+3+7+1
    testObject['null'] = null;
  });

  it('string', () => {
    assert(calculateStringSize(testObject['string']) == 3);
  });

  it('number (integer)', () => {
    assert(calculateNumberSize(testObject['integerNumber']) == 3);
  });

  it('number (float)', () => {
    assert(calculateNumberSize(testObject['floatNumber']) == 4);
  });

  it('boolean', () => {
    assert(calculateBooleanSize(testObject['boolean']) == 1);
  });

  it('null', () => {
    assert(calculateNullSize(testObject['null']) == 1);
  });

  it('object', () => {
    assert(calculateObjectSize(testObject['object']) == 30);
  });

  it('array', () => {
    assert(calculateArraySize(testObject['array']) == 27);
  });

});
