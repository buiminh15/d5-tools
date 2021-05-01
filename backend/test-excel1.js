const XlsxPopulate = require('xlsx-populate');
const path = require('path')
const request = require('request-promise');

const filePath = path.join(__dirname, 'templates', 'dich.xlsx')
const range = { s: { c: 1, r: 1 }, e: { c: 75, r: 100 } }

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

const translateSheet = async (sheet, range) => {
  for (var R = range.s.r; R <= range.e.r; ++R) {
    for (var C = range.s.c; C <= range.e.c; ++C) {
      var cell_address = { c: C, r: R };
      const cell = sheet.row(cell_address.r).cell(cell_address.c);
      var desired_value = (cell ? cell.value() : undefined)
      if (desired_value) {
        desired_value = await translateTextFromGoogle(desired_value)
      }
      cell.value(desired_value).style({ fontFamily: "Arial" })
    }
  }
}

async function run() {
  const workbook = await XlsxPopulate.fromFileAsync(filePath)
  const sheets = workbook.sheets();
  for (let i = 0; i < sheets.length; i++) {
    await translateSheet(workbook.sheet(i), range)
  }
  await workbook.toFileAsync("./out.xlsx")
  console.log('Done')
}

run()
