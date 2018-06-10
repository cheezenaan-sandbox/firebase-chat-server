import * as admin from 'firebase-admin';

interface Message {
  body: string;
  date: string;
  user: User;
}

interface User {
  id: string;
  nickname: string;
  avatar: string;
}

const defaultData = (channelName: string): { [id: string]: Message } => {
  const firstDate = new Date();
  const secondDate = new Date();
  secondDate.setSeconds(secondDate.getSeconds() + 1);

  return {
    1: {
      body: `Welcome to ${channelName} channel!!!`,
      date: firstDate.toJSON(),
      user: {
        id: 'robot',
        nickname: 'robot',
        avatar: '',
      },
    },
    2: {
      body: `Let's post first message :D`,
      date: secondDate.toJSON(),
      user: {
        id: 'robot',
        nickname: 'robot',
        avatar: '',
      },
    },
  };
};

export const createChannel = (channelName: string) => {
  const channelsRef = admin.database().ref('channels');
  channelsRef.child(channelName).set({ messages: defaultData(channelName) });
};
