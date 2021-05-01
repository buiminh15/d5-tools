import express from 'express';
import filesController from '../controllers/files.controller'

const router = express.Router();
// router.post('/txt', filesController.generateTextFile);
// router.post('/excel', filesController.generateExcelFile );
router.post('/testcase/excel', filesController.generateTestcaseFile);
router.post('/translator/excel', filesController.generateTranslatorFile);
router.get('/tool-admin/excel', filesController.sendToolAdminFile);

export default router;
