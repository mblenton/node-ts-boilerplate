import * as winston from 'winston';

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.label({ label: 'node-ts-boilerplate' }),
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new(winston.transports.Console)({
      level: process.env.NODE_ENV === 'production'
        ? 'error'
        : 'debug',
      handleExceptions: true,
      format: winston
        .format
        .simple()
    }),
    new winston
      .transports
      .Console(),
    new winston
      .transports
      .File({ filename: './logs/combined.log' }),
    new winston
      .transports
      .File({ filename: './logs/debug.log', level: 'debug' }),
    new winston
      .transports
      .File({ filename: './logs/error.log', level: 'error' })
  ],
  exceptionHandlers: [
    new winston
      .transports
      .File({ filename: './logs/exceptions.log' })
  ]
});

export default logger;
