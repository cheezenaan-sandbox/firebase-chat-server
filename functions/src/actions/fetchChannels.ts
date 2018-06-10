import * as admin from 'firebase-admin';

interface Channel {
  key: string;
}

export async function fetchChannels(): Promise<Array<Channel>> {
  const channels: Array<Channel> = [];

  const snapshot: admin.database.DataSnapshot = await admin
    .database()
    .ref('channels')
    .once('value');

  // TODO: Use appropriate type definition
  // ref. https://github.com/firebase/firebase-js-sdk/issues/555
  snapshot.forEach(
    (childSnapshot: { [key: string]: FIXME }): FIXME => {
      channels.push(childSnapshot.key);
    }
  );
  return channels;
}
