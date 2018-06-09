import * as functions from 'firebase-functions';

const helloWorld = functions.https.onRequest(
  (_req: functions.Request, res: functions.Response): void => {
    res.send('Hello from Firebase!\n\n');
  }
);

exports.helloWorld = helloWorld;
