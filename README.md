# Excel

The easy way to use `xlsx` lib, wrapped in class

## API

| Function          | Params                                  | Description                                                                                                                                                             |
| ----------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **addSheet**      | data, sheetName (optional)              | Add new Sheet with Data and Sheet Name<br>data -> Array of JSON,<br>sheetName -> String, default `Sheet Number`, example: `Sheet 1`                                     |
| **toHtml**        | sheetIndex(optional), options(optional) | Generate HTML of table<br>sheetIndex -> number, default = 0<br>options -> Object, `editable`, `header`, `footer`, default: `{ editable: false, header: '', footer: ''}` |
| **toArrayBuffer** | -                                       | Generate ArrayBuffer                                                                                                                                                    |
| **toFile**        | fileName(optional)                      | Generate File<br>fileName -> string, default 'Excel.xlsx'                                                                                                               |
| **download**      | fileName(optional)                      | Download xlsx file<br>fileName -> string, default 'Excel.xlsx'                                                                                                          |
| **length**        | -                                       | Get sheets length'                                                                                                                                                      |

## Examples

```js
import XLSX from 'excel'

const xlsx = new XLSX()
xlsx
  .addSheet(
    [
      {
        no: 1,
        name: 'Edwin',
      },
      {
        no: 2,
        name: 'Setiawan',
      },
    ],
    'Edwin Setiawan',
  )
  .addSheet([{ sample: 1 }])
  .download('samples.xlsx') // will generate samples.xlsx

console.log(xlsx.length()) // return 2

const xlsx2 = new XLSX()
xlsx2
  .addSheet(
    [
      {
        no: 1,
        name: 'Edwin',
      },
      {
        no: 2,
        name: 'Setiawan',
      },
    ],
    'Edwin Setiawan',
  )
  .addSheet([{ sample: 1 }])

cont aB = xlsx2.toArrayBuffer() // generate array buffer
cont file = xlsx2.toFile('samples.xlsx') // generate file
```
