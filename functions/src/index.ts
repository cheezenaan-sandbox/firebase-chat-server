import express from 'express';
import * as functions from 'firebase-functions';

const app = express();

app.get(
  '/helloWorld',
  (_req: express.Request, res: express.Response): void => {
    res.send('Hello from Firebase!\n\n');
  }
);

exports.app = functions.https.onRequest(app);
