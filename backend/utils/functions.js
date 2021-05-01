import fs from 'fs'
import { SPECIAL_CHARACTERS } from '../utils/constants';
import path from 'path'
import { Parser } from 'json2csv'
import request from 'request-promise';

const createEmptyFileOfSize = (fileName, size) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(__dirname, '..', '/upload/', fileName);
    fh = fs.openSync(filePath, 'w');
    fs.writeSync(fh, 'ok', Math.max(0, size - 2));
    fs.closeSync(fh);
    resolve(true);
  });
}

const makeDir = (filePath) => {
  // recursively create multiple directories
  fs.mkdir(filePath, { recursive: true }, (err) => {
    if (err) {
      throw err;
    }
    console.log("Directory is created.");
  });
}
const cloneFileTemplateExcel = (fileNameSrc, filePathDest) => {
  const filePath = path.join(__dirname, '..', 'templates', fileNameSrc);
  fs.copyFile(filePath, filePathDest, (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  });
}
const convertJsonToCsvTestCase = async (datas, file_name, fieldsArr) => {
  const fields = fieldsArr;
  const opts = { fields };
  const filePath = path.join(__dirname, '..', 'upload', file_name);
  try {
    const parser = new Parser(opts);
    let csv = parser.parse(datas);
    let strArr = csv.split('\n')
    strArr.shift()
    let arr = strArr.map(item => item = item.match(/.{1,65}(\s|$)/g)).map(item => item.join('\r\n')).join('\n')
    fs.writeFileSync(filePath, arr, function (err) {
      if (err) throw err;
      console.log('file saved');
    });
  } catch (err) {
    console.error(err);
  }
}

const convertJsonTestCase = (datas, fieldsArr) => {
  const fields = fieldsArr;
  const result = datas.map(data => data[fields])

  return result

}
const sendFileToClient = (res, file_name, mime_type) => {
  src.pipe(res);
}
const cloneFileCsv = async (fileNameSrc, filePathDest) => {
  const filePath = path.join(__dirname, '..', 'upload', fileNameSrc);
  await fs.copyFile(filePath, filePathDest, (err) => {
    if (err) throw err;
    console.log('copied to destination.txt');
  });
}

const splitArray = (array, MAX_LINE_IN_SHEET) => {
  let arrayOfArrays = []
  while (array.length > 0) {
    let arrayElement = array.splice(0, MAX_LINE_IN_SHEET);
    arrayOfArrays.push(arrayElement);
  }
  return arrayOfArrays;
}

const setValueToSheet = (sheet, range, dataArray) => {
  let i = 1
  let limitRange;
  console.log('dataArray ', dataArray);
  if (range.e.r -range.s.r > dataArray.length) {
    limitRange = dataArray.length
  } else {
    limitRange = dataArray.length
  }
  for (let R = range.s.r; R <= range.e.r; ++R) {
    for (let C = range.s.c; C <= range.e.c; ++C) {
      let cell_address = { c: C, r: R };
      const cell = sheet.row(cell_address.r).cell(cell_address.c);
      cell.value(dataArray[i - 1] ? dataArray[i - 1].replace(/^(\r\n|\n|\r)/gm, '') : '').
        style({ fontFamily: "Arial" })
    }
    let cellChk = sheet.row(R).cell(15 + i)
    cellChk.value(SPECIAL_CHARACTERS.CIRCLE_CHECK).style({ fontFamily: "Arial" })
    i++
  }
}

const setResultToSheet = (sheet, range) => {
  let i = 1
  for (let R = range.s.r; R <= range.e.r; ++R) {
    for (let C = range.s.c; C <= range.e.c; ++C) {
      let cell_address = { c: C, r: R };
      const cell = sheet.row(cell_address.r).cell(cell_address.c);
      cell.value('result').style({ fontFamily: "Arial" })
    }
    let cellChk = sheet.row(R).cell(15 + i)
    cellChk.value(SPECIAL_CHARACTERS.CIRCLE_CHECK).style({ fontFamily: "Arial" })
    i++
  }
}

/// translator

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

const translateTextFromGoogle = async (translateFrom, translateTo, text) => {
  text = text.toString()
  let getParam = encodeURIComponent(ConvertToGet(text))
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

const translateSheet = async (translateFrom, translateTo, sheet, range) => {
  for (var R = range.s.r; R <= range.e.r; ++R) {
    for (var C = range.s.c; C <= range.e.c; ++C) {
      var cell_address = { c: C, r: R };
      const cell = sheet.row(cell_address.r).cell(cell_address.c);
      var desired_value = (cell ? cell.value() : undefined)
      if (desired_value) {
        desired_value = await translateTextFromGoogle(translateFrom, translateTo, desired_value)
      }
      cell.value(desired_value).style({ fontFamily: "Arial" })
    }
  }
}

export {
  cloneFileCsv,
  sendFileToClient,
  createEmptyFileOfSize,
  convertJsonToCsvTestCase,
  convertJsonTestCase,
  cloneFileTemplateExcel,
  makeDir,
  splitArray,
  setValueToSheet,
  setResultToSheet,
  translateSheet
}




