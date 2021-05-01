import express from 'express'
import testcaseController from '../controllers/testcase.controller'

const router = express.Router();

router.get('/:name', testcaseController.getTestcases);
// router.post('/', testcaseController.getTestcasesByIds);
// router.get('/:id', testcaseController.getTestcase);
// router.put('/:id', testcaseController.updateTestcase);
// router.delete('/:id', testcaseController.deleteTestcase);


export default router