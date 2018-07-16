import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';
import initializeApplication from './initialize';

admin.initializeApp();
exports.app = functions.https.onRequest(initializeApplication());
