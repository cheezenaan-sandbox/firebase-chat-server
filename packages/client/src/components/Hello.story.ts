import { storiesOf } from '@storybook/vue';

import Hello from './Hello';

storiesOf('Hello', module).add('story as a component', () => ({
  components: { Hello },
  template: `
    <Hello name="Kinro Mosaic" initialEnthusiasm="3" />
  `,
}));
