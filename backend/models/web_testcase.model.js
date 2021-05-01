import mongoose from 'mongoose';
import TestCaseSchema from './Testcase.model';

// const TestCaseSchema = new mongoose.Schema({
//   test_case: {
//     type: String,
//     require: true,
//   }
// }, {
//   timestamps: true
// }
// );

const webTestcaseSchema = mongoose.Schema({
  languages: {
    type: String,
    enum: ['en', 'ja', 'vi'],
    default: 'en',
  },
  login_testcases: [TestCaseSchema],
  general_testcases: [TestCaseSchema],
  gui_and_usability_testcases: [TestCaseSchema],
  filter_criteria_testcases: [TestCaseSchema],
  result_grid_testcases: [TestCaseSchema],
  window_testcases: [TestCaseSchema],
  database_testing_testcases: [TestCaseSchema],
  sending_email_testcases: [TestCaseSchema],
  image_upload_testcases: [TestCaseSchema],
  performance_testing_testcases: [TestCaseSchema],
  security_testing_testcases: [TestCaseSchema],
  excel_export_functionality_testcases: [TestCaseSchema],
}, {
  timestamps: true
}
)

const WebTestcase = mongoose.model('WebTestcase', webTestcaseSchema);

export default WebTestcase;
