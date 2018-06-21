import * as React from 'react';
import { Button, Form, Segment, TextArea } from 'semantic-ui-react';

import { Message } from '../../../custom';
import { postMessage } from './client';

interface Props {
  channelName: string;
}

interface State {
  body?: string;
}

export class MessageForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      body: '',
    };
  }

  private handleTextAreaChange = (
    event: React.FormEvent<HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    this.setState({ body: event.currentTarget.value });
  };

  private handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { channelName } = this.props;
    const { body } = this.state;
    const payload = { body } as Message;

    postMessage(channelName, payload)
      .then(() => {
        this.setState({ body: '' });
      })
      .catch(error => console.warn(error));
  };
  public render() {
    const { body } = this.state;

    return (
      <Segment basic textAlign="center">
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <TextArea
              autoHeight
              placeholder="Write your message :D"
              onChange={this.handleTextAreaChange}
              value={body}
            />
          </Form.Field>
          <Button primary type="submit">
            Send
          </Button>
        </Form>
      </Segment>
    );
  }
}
