import httpStatus from 'http-status';
import { Testcase } from '../models';
import ApiError from '../utils/ApiError';

const getTestcases = async () => {
  return await Testcase.find({}, (err, testcases) => {
    if (err) throw new ApiError(httpStatus.NOT_FOUND, 'Not found any testcase')
  });
};

const getTestcase = async (_id) => {
  return await Testcase.findById({ _id });
};

const updateTestcase = async (_id, updateBody) => {
  const testcase = await getTestcase(_id);
  if (!testcase) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Testcase not found');
  }
  Object.assign(testcase, updateBody);
  await testcase.save();
  return testcase;
};

const deleteTestcase = async (_id) => {
  const testcase = await getTestcase(_id);
  if (!testcase) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Testcase not found');
  }
  await testcase.remove();
  return testcase;
};

export default { getTestcases, getTestcase, updateTestcase, deleteTestcase }
