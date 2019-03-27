
const typeCheck = (variable) => {
  if (typeof variable === 'string') return 'string';
  else if (typeof variable === 'number') return 'number';
  else if (typeof variable === 'object' &&
          variable == null) return 'null';
  else if (typeof variable === 'object' &&
          Array.isArray(variable)) return 'array';
  else if (typeof variable === 'object' &&
          !Array.isArray(variable)) return 'object';
  else if (typeof variable === 'boolean') return 'boolean';

  return '';
}

exports.typeCheck = typeCheck;

const calculateByType = (variable) => {
  const type = typeCheck(variable);

  switch(type) {
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
  }
}

const calculateStringSize = (value) => {
  return value.length;
};

const calculateKeySize = (key) => {
  return key.length;
};

const calculateNumberSize = (value) => {
  if(!(typeof value === 'number')) return false;

  value = value.toString();
  value = value.replace('.', '');

  return (Math.round(value.length / 2) + 1);
};

const calculateBooleanSize = () => 1;

const calculateNullSize = () => 1;

const calculateArraySize = (items) => {
  let totalSize = 3;  // default

  items.forEach(element => {
    totalSize += calculateByType(element);
  });

  return totalSize;
}

const calculateObjectSize = (object) => {
  let totalSize = 3;  // default

  for (property in object) {
    totalSize += (property.length + calculateByType(object[property]));
  }

  return totalSize;
}

exports.calculateStringSize = calculateStringSize;
exports.calculateNumberSize = calculateNumberSize;
exports.calculateKeySize = calculateKeySize;
exports.calculateBooleanSize = calculateBooleanSize;
exports.calculateNullSize = calculateNullSize;
exports.calculateObjectSize = calculateObjectSize;
exports.calculateArraySize = calculateArraySize;