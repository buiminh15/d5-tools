import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import helmet from 'helmet'
import mongoose from 'mongoose'
import ApiError from './utils/ApiError'
import errorHandler from './middlewares/error'
import config from './config/config'
import logger from './config/logger'
import passport from 'passport'
import jwtStrategy  from './config/passport'
import indexRoute from './routes/index'

require('dotenv').config()
var app = express();
let server;

mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB');
  server = app.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
  });
});


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.use(helmet())
// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

app.use('/api/v1/', indexRoute);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// error handler
app.use(errorHandler)

export default app;
