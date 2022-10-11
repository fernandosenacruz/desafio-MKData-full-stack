import 'express-async-errors';

import Express, { Application } from 'express';

import errorMiddleware from './middlewares/error';
import routers from './routers';

const App: Application = Express();

App.use(Express.json());

App.use(errorMiddleware);
App.use('/clients', routers.clients);

export default App;
