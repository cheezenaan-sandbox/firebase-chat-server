import * as React from 'react';
import { match } from 'react-router-dom';

import { MessageFeed, MessageForm } from '../components';

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

  return (
    <React.Fragment>
      <MessageFeed channelName={channelName} />
      <MessageForm channelName={channelName} />
    </React.Fragment>
  );
};
