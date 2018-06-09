import cors from 'cors';
import express from 'express';
import * as functions from 'firebase-functions';

const app = express();
app.use(cors({ origin: true }));

app.get(
  '/helloWorld',
  (_req: express.Request, res: express.Response): void => {
    res.send('Hello from Express on Firebase with CORS request!!\n\n');
  }
);

exports.app = functions.https.onRequest(app);
