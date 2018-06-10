import * as functions from 'firebase-functions';
import initializeApplication from './initialize';

exports.app = functions.https.onRequest(initializeApplication());
