import * as React from 'react';
import { Button, Form, Segment, TextArea } from 'semantic-ui-react';

import { Message } from '../../../shared/custom';
import { postMessage } from './client';

interface Props {
  channelName: string;
  toggleShouldReload: (shouldReload: boolean) => void;
}

interface State {
  body?: string;
  isSubmiting: boolean;
}

export class MessageForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      body: '',
      isSubmiting: false,
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

    const { body } = this.state;
    if (!body) return;

    const payload = { body } as Message;
    const { channelName, toggleShouldReload } = this.props;
    this.setState({ isSubmiting: true });

    postMessage(channelName, payload)
      .then(() => {
        this.setState({ body: '', isSubmiting: false });
        toggleShouldReload(true);
      })
      .catch(error => {
        console.warn(error);
        this.setState({ isSubmiting: false });
      });
  };

  public render() {
    const { body, isSubmiting } = this.state;

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
          <Button primary={!isSubmiting} disabled={isSubmiting} type="submit">
            Send
          </Button>
        </Form>
      </Segment>
    );
  }
}
