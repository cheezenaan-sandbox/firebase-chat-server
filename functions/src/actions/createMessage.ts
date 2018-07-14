import * as admin from 'firebase-admin';

import { User } from '../../../shared/custom';

interface CreateMessageInterface {
  channelName: string;
  body: string;
  user?: User;
}

export const createMessage = ({
  channelName,
  body,
  user,
}: CreateMessageInterface) => {
  const message = {
    date: new Date().toJSON(),
    body,
    user,
  };
  const messageRef: admin.database.Reference = admin
    .database()
    .ref(`channels/${channelName}/messages`);
  messageRef.push(message);
};
