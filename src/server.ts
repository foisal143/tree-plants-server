import app from './app';
import mongoose from 'mongoose';
import { config } from './app/config';
async function rootApp() {
  mongoose.connect(config.db_url as string);
  app.listen(config.port, () => {
    console.log('server is running on port', config.port);
  });
}

rootApp();
