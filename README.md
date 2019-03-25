# Excel
The easy to use `xlsx` lib, wrapped in class

## API
| Function 	| Params 	| Description 	|
|----------	|-----------------------------------------	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| **addSheet** 	| data, sheetName (optional) 	| Add new Sheet with Data and Sheet Name<br>data -> Array of JSON,<br>sheetName -> String, default `Sheet Number`, example: `Sheet 1` 	|
| **toHtml**	| sheetIndex(optional), options(optional) 	| generate HTML of table<br>sheetIndex -> number, default = 0<br>options -> Object, `editable`, `header`, `footer`, default: ```{ editable: false, header: '', footer: ''}``` 	|
| **download** 	| fileName(optional) 	| Download xlsx file<br>fileName -> string, default 'Excel.xlsx' 	|

## Examples
```js
import XLSX from 'excel'

const xlsx = new XLSX()
xlsx
  .addSheet([
    {
      no: 1, 
      name: 'Edwin'
    },
    {
      no: 2,
      name: 'Setiawan'
    }
  ], 'Edwin Setiawan')
  .addSheet([{sample: 1}])
  .download('samples.xlsx') // will generate samples.xlsx
```
