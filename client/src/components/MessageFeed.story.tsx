import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { MessageFeed } from './MessageFeed';

// TODO: toggleShouldReload の扱いが微妙すぎる…
const props = {
  channelName: 'Sound! Euphonium',
  shouldReload: false,
  toggleShouldReload: () => {},
};

storiesOf('Components/MessageFeed', module).add('default', () => (
  <MessageFeed {...props} />
));
