# DynamoDb-Item-Size

DynamoDb-Item-Size is a Nodejs library for calculate the byte size of an object.

## Installation


```bash
npm install dynamodb-item-size
```

## Usage

```javascript
const { calculateItemSize } = require('dynamodb-item-size');

const obj = {
  name: 'Salvo',
  age: 29
};

const size = calculateItemSize(obj);  // Output: 14
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
MIT