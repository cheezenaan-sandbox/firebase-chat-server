import cors from 'cors';
import express from 'express';

export default function initializeApplication() {
  const app = express();
  app.use(cors({ origin: true }));

  app.get(
    '/api/hello',
    (_req: express.Request, res: express.Response): void => {
      res.send('Hello from Express on Firebase with CORS request!!\n\n');
    }
  );

  return app;
}
