const XlsxPopulate = require('xlsx-populate');
const path = require('path')
const fs = require('fs')

const MAX_LINE_IN_SHEET = 6
const filePath = path.join(__dirname, 'templates', 'test.xlsx')
const fileCsvPath = path.join(__dirname, 'upload', 'test.csv')
const range = { s: { c: 3, r: 8 }, e: { c: 3, r: 8 + MAX_LINE_IN_SHEET - 1 } }
const rangeResult = { s: { c: 3, r: 27 }, e: { c: 3, r: 27 + MAX_LINE_IN_SHEET - 1 } }
var dataArray
var arrayOfArrays = [];

const splitArray = (array, MAX_LINE_IN_SHEET) => {
  while (array.length > 0) {
    let arrayElement = array.splice(0, MAX_LINE_IN_SHEET);
    arrayOfArrays.push(arrayElement);
  }
  return arrayOfArrays;
}

const setValueToSheet = (sheet, range, dataArray) => {
  let i = 1
  for (var R = range.s.r; R <= range.e.r; ++R) {
    for (var C = range.s.c; C <= range.e.c; ++C) {
      var cell_address = { c: C, r: R };
      const cell = sheet.row(cell_address.r).cell(cell_address.c);
      cell.value(dataArray[i - 1].replace(/^(\r\n|\n|\r)/gm, '')).style({ fontFamily: "Arial" })
    }
    let cellChk = sheet.row(R).cell(15 + i)
    cellChk.value('〇').style({ fontFamily: "Arial" })
    i++
  }
}

const setResultToSheet = (sheet, range) => {
  let i = 1
  for (var R = range.s.r; R <= range.e.r; ++R) {
    for (var C = range.s.c; C <= range.e.c; ++C) {
      var cell_address = { c: C, r: R };
      const cell = sheet.row(cell_address.r).cell(cell_address.c);
      cell.value('result').style({ fontFamily: "Arial" })
    }
    let cellChk = sheet.row(R).cell(15 + i)
    cellChk.value('〇').style({ fontFamily: "Arial" })
    i++
  }
}

// const parseData = () => {
//   try {
//     const data = fs.readFileSync(fileCsvPath, 'utf8')
//     dataArray = data.replace(/"$/gm, '",');
//     dataArray = dataArray.split(/,$/gm)
//     arrayOfArrays = splitArray(dataArray, MAX_LINE_IN_SHEET)
//     return arrayOfArrays
//   } catch (error) {
//     console.error(error)
//   }
// }

async function run() {
  try {
    const data = fs.readFileSync(fileCsvPath, 'utf8')
    dataArray = data.replace(/"$/gm, '",');
    dataArray = dataArray.split(/,$/gm)
    arrayOfArrays = splitArray(dataArray, MAX_LINE_IN_SHEET)

    const workbook = await XlsxPopulate.fromFileAsync(filePath)
    for (let index = 0; index < arrayOfArrays.length; index++) {
      let sheet = workbook.sheet(index)
      workbook.cloneSheet(sheet, `M${index + 2}`)
      setValueToSheet(sheet, range, arrayOfArrays[index])
      setResultToSheet(sheet, rangeResult)
    }
    await workbook.toFileAsync("./out.xlsx")
    console.log('Done')
  } catch (error) {
    console.log(error);
  }
}

run()






