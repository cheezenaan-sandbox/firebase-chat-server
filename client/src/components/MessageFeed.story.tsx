import { storiesOf } from '@storybook/react';
import * as React from 'react';
import MessageFeed from './MessageFeed';

// TODO
const props = {
  channelName: 'Sound! Euphonium',
};

storiesOf('Components/MessageFeed', module).add('default', () => (
  <MessageFeed {...props} />
));
