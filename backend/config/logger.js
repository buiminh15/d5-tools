import winston from 'winston';
import config from './config';
import path from 'path'
import moment from 'moment'
import fs from 'fs'
var logDir = 'log';

if (!fs.existsSync(logDir)) {
  // Create the directory if it does not exist
  fs.mkdirSync(logDir);
}

const enumerateErrorFormat = winston.format((info) => {
  if (info instanceof Error) {
    Object.assign(info, { message: info.stack });
  }
  return info;
});

const logger = winston.createLogger({
  level: config.env === 'development' ? 'debug' : 'info',
  format: winston.format.combine(
    enumerateErrorFormat(),
    config.env === 'development' ? winston.format.colorize() : winston.format.uncolorize(),
    winston.format.splat(),
    winston.format.printf(({ level, message }) => `${level}: ${message}`)
  ),
  transports: [
    new winston.transports.File({ filename: path.join(__dirname, '..', 'log', moment(new Date()).format("YYYYMMDD") + '_debug.log'), level: 'debug' }),
    new winston.transports.File({ filename: path.join(__dirname, '..', 'log', moment(new Date()).format("YYYYMMDD") + '_combined.log'), level: 'info' }),
  ],
});

export default logger