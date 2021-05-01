const mongoose = require('mongoose');

const TestCaseSchema = mongoose.Schema({
  testcase: {
    type: String,
  },
});

// const Testcase = mongoose.model('Testcase', TestCaseSchema);

export default TestCaseSchema;
