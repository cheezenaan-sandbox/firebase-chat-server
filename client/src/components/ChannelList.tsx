import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Icon, Menu } from 'semantic-ui-react';

const channels: Array<string> = ['general', 'random'];

export const ChannelList = () => (
  <Menu inverted vertical fixed="left">
    <Menu.Item as={Link} to="/">
      Home <Icon name="home" />
    </Menu.Item>
    <Menu.Item>
      ChannelList
      <Icon name="list" />
      <Menu.Menu>
        {channels.map(channel => (
          <Menu.Item
            key={channel}
            name={channel}
            as={NavLink}
            to={{ pathname: `/channels/${channel}` }}
          >
            {channel}
          </Menu.Item>
        ))}
      </Menu.Menu>
    </Menu.Item>
  </Menu>
);
