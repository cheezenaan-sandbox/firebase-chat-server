import cors from 'cors';
import express from 'express';

import { checkUser } from './actions';
import { router } from './routes/v1';

export default function initializeApplication() {
  const app = express();
  app.use(cors({ origin: true }));
  app.use(checkUser);

  app.get(
    '/api/hello',
    (_req: express.Request, res: express.Response): void => {
      res.send('Hello from Express on Firebase with CORS request!!\n\n');
    }
  );

  app.use('/api/v1', router);

  return app;
}
