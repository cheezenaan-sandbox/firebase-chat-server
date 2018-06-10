import * as admin from 'firebase-admin';

interface Channel {
  key: string;
}

export async function fetchChannels(): Promise<Array<Channel>> {
  const channels: Array<Channel> = [];

  const snapshot = await admin
    .database()
    .ref('channels')
    .once('value');

  snapshot.forEach((childSnapshot: { [key: string]: Channel }) => {
    channels.push(childSnapshot.key);
  });
  return channels;
}
