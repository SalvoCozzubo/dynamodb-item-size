# DynamoDb-Item-Size

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/2e94e45be670413e905755d8d30b8eb0)](https://www.codacy.com/app/salvatore.cozzubo/dynamodb-item-size?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=SalvoCozzubo/dynamodb-item-size&amp;utm_campaign=Badge_Grade)

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

## Test

```bash
git clone https://github.com/SalvoCozzubo/dynamodb-item-size
cd dynamodb-item-size
npm install
npm test
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
MIT