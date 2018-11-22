import { express } from 'express';
// eslint-disable-next-line import/no-unresolved
import { router } from 'routes/routes';

const server = express();
server.use(express.json());

server.use(router);

const port = process.env.PORT || 3000;
server.listen(port);
export default server;
