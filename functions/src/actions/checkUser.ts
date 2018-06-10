import express from 'express';
import * as admin from 'firebase-admin';
import { FIXME, User } from '../../custom.d';

const anonymousUser: User = {
  id: 'anon',
  nickname: 'Anonymous',
  avatar: '',
};

export const checkUser = (
  req: FIXME,
  _res: express.Response,
  next: express.NextFunction
) => {
  req.user = anonymousUser;

  const idToken = req.query.auth_token;
  if (!idToken) next();

  admin
    .auth()
    .verifyIdToken(idToken)
    .then(decodedIdToken => {
      req.user = {
        id: decodedIdToken.user_id,
        nickname: decodedIdToken.name,
        avatar: decodedIdToken.picture,
      };
      next();
    })
    .catch((err: Error) => {
      console.warn('Authorization failed', err);
      next();
    });
};
