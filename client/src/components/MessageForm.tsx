import * as React from 'react';
import { Button, Form, Segment, TextArea } from 'semantic-ui-react';

interface Props {
  channelName: string;
}

interface State {
  body?: string;
}

export default class MessageForm extends React.Component<Props, State> {
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

  public render() {
    const { body } = this.state;

    return (
      <Segment basic textAlign="center">
        <Form>
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
