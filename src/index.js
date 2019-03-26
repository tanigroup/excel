import XLSX from 'xlsx'
import FileAPI from 'file-api'

const { File } = FileAPI
const defaultFileName = 'Excel.xlsx'

export default class Excel {
  constructor() {
    this.workBook = XLSX.utils.book_new()
    this.count = 1
  }

  addSheet(data, sheetName = null) {
    const workSheet = XLSX.utils.json_to_sheet(data)
    const selectedSheetName = sheetName === null ? `Sheet ${this.count}` : sheetName
    XLSX.utils.book_append_sheet(this.workBook, workSheet, selectedSheetName)
    this.count += 1

    return this
  }

  toHtml(
    sheetIndex = 0,
    options = {
      editable: false,
      header: '',
      footer: '',
    },
  ) {
    const sheet = this.workBook.Sheets[this.workBook.SheetNames[sheetIndex]]

    return XLSX.utils.sheet_to_html(sheet, options)
  }

  toArrayBuffer() {
    return XLSX.write(this.workBook, { bookType: 'xlsx', type: 'array' })
  }

  toFile(fileName = defaultFileName) {
    return new File([this.toArrayBuffer()], fileName)
  }

  length() {
    return this.workBook.SheetNames.length
  }

  download(fileName = defaultFileName) {
    XLSX.writeFile(this.workBook, fileName)
  }
}
