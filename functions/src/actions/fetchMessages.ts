import * as admin from 'firebase-admin';
import { FIXME, Message } from '../../custom';

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
  const snapshot: admin.database.DataSnapshot = await messagesRef.once('value');

  // TODO: Use appropriate type definition
  // ref. https://github.com/firebase/firebase-js-sdk/issues/555
  snapshot.forEach(
    (childSnapshot: { [key: string]: FIXME }): FIXME => {
      const message = childSnapshot.val();
      message.id = childSnapshot.key;
      messages.push(message);
    }
  );
  return messages.reverse();
}
