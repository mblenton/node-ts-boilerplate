import * as winston from 'winston';

const logger = winston.createLogger({
  transports: [
    new(winston.transports.Console)({
      level: process.env.NODE_ENV === 'production'
        ? 'error'
        : 'debug',
      format: winston
        .format
        .simple()
    }),
    new winston
      .transports
      .Console(),
    new winston
      .transports
      .File({filename: './logs/combined.log'}),
    new winston
      .transports
      .File({filename: './logs/debug.log', level: 'debug'}),
    new winston
      .transports
      .File({filename: './logs/error.log', level: 'error'})
  ]
});

export default logger;
