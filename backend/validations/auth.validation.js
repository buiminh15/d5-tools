import Joi from 'joi'
import custom from './custom.validation'
const authValidation = {
  register: {
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().custom(custom.password),
      name: Joi.string().required(),
    })
  },
  login: {
    body: Joi.object().keys({
      email: Joi.string().required(),
      password: Joi.string().required(),
    }),
  },
  logout: {
    body: Joi.object().keys({
      refreshToken: Joi.string().required(),
    }),
  }
}
export default authValidation;