import 'dotenv';
import App from './app';

process.on('SIGTERM', () => {
  process.exit();
});

const PORT = process.env.APP_PORT || 3001;

App.listen(PORT, () => console.log('App listening at %d', PORT));
