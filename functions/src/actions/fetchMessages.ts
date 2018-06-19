import * as admin from 'firebase-admin';

import { Message } from '../../../custom';

interface fetchMessagesInterface {
  channelName: string;
}

export async function fetchMessages({
  channelName,
}: fetchMessagesInterface): Promise<Array<Message>> {
  const messages: Array<Message> = [];
  const messagesRef = admin
    .database()
    .ref(`channels/${channelName}/messages`)
    .orderByChild('date');
  const snapshot = await messagesRef.once('value');

  snapshot.forEach((childSnapshot: admin.database.DataSnapshot) => {
    const message = childSnapshot.val();
    message.id = childSnapshot.key;

    messages.push(message);
  });

  return messages.reverse();
}
