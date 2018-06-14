import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ChannelList } from './ChannelList';

storiesOf('ChannelList', module).add('Default', () => (
  <BrowserRouter>
    <ChannelList />
  </BrowserRouter>
));
