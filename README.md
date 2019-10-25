# paginate-info
A simple module to paginate your arrays and calculate limit and offset

```
const { calculateLimitAndOffset, paginate } = require('paginate-info')

const { limit, offset } = calculateLimitAndOffset(2, 20)

// limit = 20, offset = 20
```

### Installation
This is a Node.js module available through the npm registry.

Before installing, download and install Node.js. Node.js 0.10 or higher is required.

Installation is done using the npm install command:

` $ npm install paginate-info`

## Features
- calculate limit and offset
- generate pagination info
- calculates total number of pages.

## API
- **calulateLimitAndOffset**

  calculates the offset and limit

| Params                 | Type  | Description 
| :------------------------| :----------: | :------: |
|  currentPage |  number | currentPage to get, defaults to 1
|  pageLimit(optional)  |  number | maximum number of items to return for the current page, defaults to 20
|
 *Returned Object:*
 
| Params                 | Type  | Description 
| :------------------------| :----------: | :------: |
|  offset |  number | number of items to skip or offset
|  limit  |  number | maximum number of items to return for the current page, defaults to 20
|

- **paginate**

  returns the pagination info

| Params                 | Type  | Description 
| :------------------------| :----------: | :------: |
|  currentPage |  number | currentPage to get, defaults to 1 
|  count  |  number | total count of items, probably gotten from database query
|  rows   | array   | array of items to paginate
|  pageLimit(optional)  |  number | maximum number of items to return for the 
|

  *Returned Object*


| Params                 | Type  | Description 
| :------------------------| :----------: | :------: |
|  currentPage |  number | currentPage to get, defaults to 1 
|  pageCount  |  number | total count of available pages
|  pageSize   | number   | total number of items returned in the current page
|  count  |  number | maximum number of items to return for the query
|

## Examples
  You can checkout examples while using mongoose for mongoDb or sequelize for SQL or postgreSQL [here](https://github.com/Mcdavid95/paginate-info/blob/master/example.js)