import * as React from 'react';
import { match } from 'react-router-dom';

import { MessageFeed, MessageForm } from '../components';

interface ChannelMatch {
  channelName: string;
}

interface Props {
  match: match<ChannelMatch>;
}

interface State {
  shouldReload: boolean;
}

export class Channel extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      shouldReload: false,
    };
  }

  private toggleShouldReload = (shouldReload: boolean) => {
    this.setState({
      shouldReload,
    });
  };

  public render() {
    const {
      match: {
        params: { channelName },
      },
    } = this.props;
    const { shouldReload } = this.state;

    return (
      <React.Fragment>
        <MessageFeed
          channelName={channelName}
          shouldReload={shouldReload}
          toggleShouldReload={this.toggleShouldReload}
        />
        <MessageForm
          channelName={channelName}
          toggleShouldReload={this.toggleShouldReload}
        />
      </React.Fragment>
    );
  }
}
