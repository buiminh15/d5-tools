import {
    genExcelFile,
    genExcelTestcaseFile,
    genTextFile,
    generateExcelTranslatorFile,
    sendToolExcelFileFunc
} from '../services/file.service';

const generateTextFile = (req, res, next) => {
    const { file_name, size } = req.body
    genTextFile(res, file_name, size)
}

const generateExcelFile = (req, res, next) => {
    const { file_name } = req.body
    genExcelFile(res, file_name);
}

const generateTestcaseFile = (req, res, next) => {
    genExcelTestcaseFile(req, res)
}

const generateTranslatorFile = (req, res, next) => {
    generateExcelTranslatorFile(req, res);
}
const sendToolAdminFile = (req, res, next) => {
    sendToolExcelFileFunc(req, res);
}

export default {
    generateTextFile,
    generateExcelFile,
    generateTestcaseFile,
    generateTranslatorFile,
    sendToolAdminFile
}