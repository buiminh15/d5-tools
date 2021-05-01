import httpStatus from 'http-status';
// import WebTestcase from '../models/web_testcase.model';
import WebTestcase from '../models/webtest.model';
import ApiError from '../utils/ApiError';

const getTestcasesByField = async (name) => {
  console.log('getTestcasesByField ', name)
  return await WebTestcase.find({ name }, (err, testcases) => {
    if (err) throw new ApiError(httpStatus.NOT_FOUND, 'Not found any testcase')
  }).select('-createdAt -updatedAt -__v');
};

const getTestcasesByFieldAndIds = async (name, ids) => {
  const testcases = await WebTestcase.find({ name })
  const filteredArray = testcases[0].testcases.filter(testcase => ids.includes(testcase._id.toString()));
  return filteredArray
};

export default { getTestcasesByField, getTestcasesByFieldAndIds }
