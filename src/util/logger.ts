import * as winston from 'winston';
// import winstonRedis from 'winston-redis';

// const transportRedis = new (winstonRedis)({ host: '127.0.0.1', port: 6379 });

const transportConsole = new winston.transports.Console({
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  handleExceptions: true
});

const transportFileDebug = new winston.transports.File({
  handleExceptions: true,
  format: winston.format.combine(
    winston.format.label({ label: 'bh-node-gamelist' }),
    winston.format.timestamp(),
    winston.format.json()
  ),
  filename: './logs/debug.log'
});

const transportFileError = new winston.transports.File({
  handleExceptions: true,
  format: winston.format.combine(
    winston.format.label({ label: 'bh-node-gamelist' }),
    winston.format.timestamp(),
    winston.format.json()
  ),
  filename: './logs/error.log',
  level: 'error'
});

const transportFileException = new winston.transports.File({
  format: winston.format.combine(
    winston.format.label({ label: 'bh-node-gamelist' }),
    winston.format.timestamp(),
    winston.format.json()
  ),
  handleExceptions: true,
  filename: './logs/exceptions.log'
});

const logger = winston.createLogger({
  level: process.env.NODE_ENV === 'production'
    ? 'error'
    : 'debug',
  transports: [
    transportConsole,
    transportFileError,
    transportFileDebug,
    // transportRedis
  ],
  exceptionHandlers: [
      transportConsole,
      transportFileException
  ],
  exitOnError: false,
});

export default logger;
