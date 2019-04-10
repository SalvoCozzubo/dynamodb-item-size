const assert = require('assert');
const {
  calculateBooleanSize, calculateNullSize, calculateObjectSize,
  calculateArraySize, calculateNumberSize, calculateStringSize,
  calculateBinarySize,
} = require('../main.js');


describe('calculate size', () => {
  const testObject = {};

  before(() => {
    testObject.string = 'abc';
    testObject.integerNumber = 123;
    testObject.floatNumber = 123.45;
    testObject.boolean = true;
    testObject.array = ['element1', 'element2', 'element3'];
    testObject.object = { string: 'abc', integer: 123, boolean: true };
    testObject.null = null;
    testObject.binary = Buffer.from('abcdefghi');
  });

  it('string', () => {
    assert(calculateStringSize(testObject.string) === 3);
  });

  it('number (integer)', () => {
    assert(calculateNumberSize(testObject.integerNumber) === 3);
  });

  it('number (float)', () => {
    assert(calculateNumberSize(testObject.floatNumber) === 4);
  });

  it('boolean', () => {
    assert(calculateBooleanSize(testObject.boolean) === 1);
  });

  it('null', () => {
    assert(calculateNullSize(testObject.null) === 1);
  });

  it('object', () => {
    assert(calculateObjectSize(testObject.object) === 30);
  });

  it('array', () => {
    assert(calculateArraySize(testObject.array) === 27);
  });

  it('binary', () => {
    assert(calculateBinarySize(testObject.binary) === 9);
  });
});
