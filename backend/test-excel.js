// import XLSX from 'xlsx'
// import path from 'path'
const XLSX = require('xlsx')
const path = require('path')
const request = require('request-promise');

const range = { s: { c: 0, r: 0 }, e: { c: 75, r: 100 } }

const filePath = path.join(__dirname, 'templates', 'test.xlsx')
var workbook = XLSX.readFile(filePath, { cellStyles: true, sheetStubs: true });

const translateAllSheet = async () => {
  const sheets = workbook.SheetNames
  for (let i = 0; i < sheets.length; i++) {
    let worksheet = workbook.Sheets[workbook.SheetNames[i]]
    await translateSheet(worksheet, range)
  }
}

const translateTextFromGoogle = async (text) => {
  var translateFrom = 'ja'
  var translateTo = 'vi'
  text = text.toString()
  var getParam = encodeURIComponent(ConvertToGet(text))
  let translatedText;
  try {
    const response = await request(`https://translate.google.pl/m?hl=${translateFrom}&sl=${translateFrom}&tl=${translateTo}&ie=UTF-8&prev=_m&q=${getParam}`)
    if (response) {
      translatedText = response.match(/<div\s+class="result-container">(.*?)<\/div>/gi)[0].replace(/(<\/?[^>]+>)/gi, '');
    }
    return Clean(translatedText)
  } catch (error) {
    console.log(error)
  }
}

const Clean = (val) => {
  val = val.replace(/&quot;/g, '\"')
  val = val.replace("%2C", ",")
  val = val.replace("&#39;", "'")
  // val = val.replace(ChrW(12290), ".")
  return val
}

const ConvertToGet = (val) => {
  // val = val.replace("\r\n", "%0A")
  val = val.replace(/(\r\n|\n|\r)/gm, "")
  val = val.replace("(", "%28")
  val = val.replace(")", "%29")
  return val
}

const translateSheet = async (worksheet, range) => {
  for (var R = range.s.r; R <= range.e.r; ++R) {
    for (var C = range.s.c; C <= range.e.c; ++C) {
      var cell_address = { c: C, r: R };
      var cell_ref = XLSX.utils.encode_cell(cell_address);
      var desired_cell = worksheet[cell_ref]
      var desired_value = (desired_cell ? desired_cell.v : undefined)
      if (desired_value) {
        desired_value = await translateTextFromGoogle(desired_value)
      }
      XLSX.utils.sheet_add_aoa(worksheet, [[desired_value]], { origin: cell_ref });

    }
  }
}

const saveToFile = () => {
  // try {
  //   XLSX.writeFile(workbook, filePath);
  //   console.log('Done')
  // } catch (error) {
  //   console.log('error ', error)
  // }
}

translateAllSheet().then(
  () => saveToFile()
).catch(err => console.log(err))
