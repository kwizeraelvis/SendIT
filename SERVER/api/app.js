import express from 'express';
import bodyParser from 'body-parser';
// eslint-disable-next-line import/no-unresolved
// eslint-disable-next-line import/named
import router from './routes/routes';

const server = express();
server.use(express.json());
server.use(bodyParser.urlencoded({
  extended: false,
}));
server.use(router);

// const port = process.env.PORT || 5000;
server.listen(3000);
