import * as React from 'react';
import { Segment, Form, TextArea, Button } from 'semantic-ui-react';

export const MessageForm = () => (
  <Segment basic textalign="center">
    <Form>
      <Form.Field>
        <TextArea autoHeight placeholder="Write your message :D" />
      </Form.Field>
      <Button primary type="submit">
        Send
      </Button>
    </Form>
  </Segment>
);
