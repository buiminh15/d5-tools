import mongoose from 'mongoose';
import TestCaseSchema from './Testcase.model';

const webTestSchema = mongoose.Schema({
  name: { type: String },
  testcases: [TestCaseSchema],

}, {
  timestamps: true
}
)

const webTest = mongoose.model('webTest', webTestSchema);

export default webTest;
