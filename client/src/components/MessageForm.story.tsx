import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { MessageForm } from './MessageForm';

const props = {
  channelName: text('channelName', 'general'),
  shouldReload: false,
  toggleShouldReload: () => {},
};

storiesOf('Components/MessageForm', module)
  .addDecorator(withKnobs)
  .add('default', () => <MessageForm {...props} />);
