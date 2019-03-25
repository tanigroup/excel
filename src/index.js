import XLSX from 'xlsx'

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

  length() {
    return this.workBook.SheetNames.length
  }

  download(fileName = 'Excel.xlsx') {
    XLSX.writeFile(this.workBook, fileName)
  }
}
