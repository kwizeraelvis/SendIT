// eslint-disable no-unused-expressions
import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/routes';
import dbRouter from './routes/dbroutes';

const server = express();
server.use(express.json());
server.use(bodyParser.urlencoded({
  extended: false,
}));
server.use(router);
server.use(dbRouter);

// const port = process.env.PORT || 5000;
server.listen(8888);

export default server;
