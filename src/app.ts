import express from 'express';
import compression from 'compression'; // compresses requests
import bodyParser from 'body-parser';
import logger from './util/logger';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';
import expressValidator from 'express-validator';
import exphbs from 'express-handlebars';

// Load environment variables from .env file, where API keys and passwords are
// configured
dotenv.config();

// Controllers (route handlers)
import routes from './routes';
// Create Express server
const app = express();


// Handlebars template manager
app.engine('.hbs', exphbs({ extname: '.hbs' }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());

app.use(express.static(path.join(__dirname, 'public'), {maxAge: 31557600000})); /** * Primary app routes. */
app.use(routes);
class MyStream {
  write(message: string) {
    logger.info(message);
  }
}

const myStream = new MyStream();
app.use(morgan('{"remote_addr": ":remote-addr", "remote_user": ":remote-user", "date": ":date[clf]", "method": ":method", "url": ":url", "http_version": ":http-version", "status": ":status", "result_length": ":res[content-length]", "referrer": ":referrer", "user_agent": ":user-agent", "response_time": ":response-time"}', { stream: myStream }));

if (process.env.NODE_ENV !== 'production') {
  logger.debug('Logging initialized at debug level');
}

export default app;
