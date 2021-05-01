import httpStatus from 'http-status';
import catchAsync from '../utils/catchAsync';
import userService from '../services/user.service'
import tokenService from '../services/token.service'
import authService from '../services/auth.service'

const register = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).json({ user, tokens });
});

const login = catchAsync(async (req, res) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});


export default { register, login }

