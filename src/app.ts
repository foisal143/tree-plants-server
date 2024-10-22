import express from 'express';
import cors from 'cors';
import router from './app/route';

import globalErrorHandler from './app/errors/globalErrorHandler';
import notFound from './app/errors/notFound';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);
app.get('/', (req, res) => {
  res.send('tree plants data is comming...');
});

// global error handler
app.use(globalErrorHandler);

// route not found
app.use(notFound);
export default app;
