import 'express-async-errors';

import cors from 'cors';
import Express, { Application } from 'express';

import errorMiddleware from './middlewares/error';
import routers from './routers';

const App: Application = Express();

App.use(Express.json(), cors());

App.use('/clients', routers.clients, errorMiddleware);

export default App;
