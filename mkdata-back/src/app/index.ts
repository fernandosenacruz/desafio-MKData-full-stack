import 'express-async-errors';

import Express, { Application } from 'express';

// import routers from './routers';
// import errorMiddleware from './middlewares/error';

const App: Application = Express();

App.use(Express.json());

// App.use('/clients', routers.clients);
// App.use(errorMiddleware);

export default App;
