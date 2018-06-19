import * as React from 'react';
import { Comment, Header } from 'semantic-ui-react';

import { Message } from '../../../custom';
import { fetchMessages } from './client';

interface Props {
  channelName: string;
}

interface State {
  messages: Message[];
}

export default class MessageFeed extends React.Component<Props, State> {
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
    if (prevProps.channelName !== this.props.channelName) {
      this.fetchMessages(this.props.channelName);
    }
  }

  private fetchMessages(channelName: string) {
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
