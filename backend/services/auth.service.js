import httpStatus from'http-status';
import tokenService from'./token.service';
import userService from'./user.service';
import Token from'../models/token.model';
import ApiError from'../utils/ApiError';
import tokenTypes from'../config/tokens';

const loginUserWithEmailAndPassword = async (email, password) => {
  const user = await userService.getUserByEmail(email);
  if (!user || !(await user.isPasswordMatch(password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  }
  return user;
};

export default { loginUserWithEmailAndPassword, }