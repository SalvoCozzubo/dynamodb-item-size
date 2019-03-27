const typeCheck = (variable) => {
  if (typeof variable === 'string') return 'string';
  if (typeof variable === 'number') return 'number';
  if (typeof variable === 'object'
          && variable == null) return 'null';
  if (typeof variable === 'object'
          && Array.isArray(variable)) return 'array';
  if (typeof variable === 'object'
          && !Array.isArray(variable)) return 'object';
  if (typeof variable === 'boolean') return 'boolean';
  return false;
};

exports.typeCheck = typeCheck;

const calculateStringSize = value => value.length;

const calculateKeySize = key => key.length;

const calculateNumberSize = (number) => {
  if (!(typeof number === 'number')) return false;

  let value = number;
  value = value.toString();
  value = value.replace('.', '');

  return (Math.round(value.length / 2) + 1);
};

const calculateBooleanSize = () => 1;

const calculateNullSize = () => 1;

let calculateByType;

const calculateObjectSize = (object) => {
  let totalSize = 3;

  const keys = Object.keys(object);
  const values = Object.values(object);

  const numKeys = keys.length;

  for (let index = 0; index < numKeys; index += 1) {
    totalSize += (keys[index].length + calculateByType(values[index]));
  }

  return totalSize;
};

const calculateArraySize = (items) => {
  let totalSize = 3;

  items.forEach((element) => {
    totalSize += calculateByType(element);
  });

  return totalSize;
};

calculateByType = (variable) => {
  const type = typeCheck(variable);

  switch (type) {
    case 'string':
      return calculateStringSize(variable);
    case 'number':
      return calculateNumberSize(variable);
    case 'boolean':
      return calculateBooleanSize();
    case 'null':
      return calculateNullSize();
    case 'array':
      return calculateArraySize(variable);
    case 'object':
      return calculateObjectSize(variable);
    default:
      return false;
  }
};


exports.calculateStringSize = calculateStringSize;
exports.calculateNumberSize = calculateNumberSize;
exports.calculateKeySize = calculateKeySize;
exports.calculateBooleanSize = calculateBooleanSize;
exports.calculateNullSize = calculateNullSize;
exports.calculateObjectSize = calculateObjectSize;
exports.calculateArraySize = calculateArraySize;
