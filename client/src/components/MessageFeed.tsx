import * as React from 'react';
import { Comment, Header } from 'semantic-ui-react';

import { Message } from '../../../shared/custom';
import { fetchMessages } from './client';

interface Props {
  channelName: string;
  shouldReload: boolean;
  toggleShouldReload: (shouldReload: boolean) => void;
}

interface State {
  messages: Message[];
}

export class MessageFeed extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      messages: [],
    };
  }

  public componentDidMount() {
    const { channelName } = this.props;
    this.fetchMessages(channelName);
  }

  public componentDidUpdate(prevProps: Props) {
    const shouldfetchMessage =
      prevProps.channelName !== this.props.channelName ||
      (!prevProps.shouldReload && this.props.shouldReload);

    if (shouldfetchMessage) {
      this.fetchMessages(this.props.channelName);
    }
  }

  private fetchMessages(channelName: string) {
    this.props.toggleShouldReload(false);

    fetchMessages(channelName)
      .then(response => {
        this.setState({ messages: response.data.messages });
      })
      .catch(error => {
        console.warn(error);
      });
  }

  public render() {
    const { channelName } = this.props;
    const { messages } = this.state;

    return (
      <Comment.Group>
        <Header as="h3" dividing>
          {channelName}
        </Header>
        {messages
          .slice()
          .reverse()
          .map(message => (
            <Comment key={message.id}>
              <Comment.Avatar src={message.user.avatar || '/img/avatar.png'} />
              <Comment.Content>
                <Comment.Author as="a">{message.user.nickname}</Comment.Author>
                <Comment.Metadata>
                  <div>{message.date}</div>
                </Comment.Metadata>
                <Comment.Text>{message.body}</Comment.Text>
              </Comment.Content>
            </Comment>
          ))}
      </Comment.Group>
    );
  }
}
