import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Channel } from './Channel';

storiesOf('Containers/Channel', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const channelName = text('channelName', 'general');
    const props = {
      match: {
        params: { channelName },
        isExact: true,
        path: `/channels/:channelName`,
        url: '',
      },
    };

    return <Channel {...props} />;
  });
