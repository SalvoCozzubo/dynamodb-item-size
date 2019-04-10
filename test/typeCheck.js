const assert = require('assert');
const { typeCheck } = require('../main.js');

describe('typeCheck', () => {
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

  it('property is string', () => {
    assert(typeCheck(testObject.string) === 'string');
  });

  it('property is number (integer)', () => {
    assert(typeCheck(testObject.integerNumber) === 'number');
  });

  it('property is number (float)', () => {
    assert(typeCheck(testObject.floatNumber) === 'number');
  });

  it('property is boolean', () => {
    assert(typeCheck(testObject.boolean) === 'boolean');
  });

  it('property is array', () => {
    assert(typeCheck(testObject.array) === 'array');
  });

  it('property is object', () => {
    assert(typeCheck(testObject.object) === 'object');
  });

  it('property is null', () => {
    assert(typeCheck(testObject.null) === 'null');
  });

  it('property is binary', () => {
    assert(typeCheck(testObject.binary) === 'binary');
  });
});
