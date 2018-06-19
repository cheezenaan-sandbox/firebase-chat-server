import * as React from 'react';
import { match } from 'react-router-dom';

import MessageFeed from '../components/MessageFeed';

interface ChannelMatch {
  channelName: string;
}

interface Props {
  match: match<ChannelMatch>;
}

export const Channel = (props: Props) => {
  const {
    match: {
      params: { channelName },
    },
  } = props;

  return <MessageFeed channelName={channelName} />;
};
