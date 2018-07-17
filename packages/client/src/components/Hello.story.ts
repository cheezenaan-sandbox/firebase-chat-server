import { text, withKnobs, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/vue';

import Hello from './Hello';

storiesOf('Hello', module)
  .addDecorator(withKnobs)
  .add('story as a component', () => {
    const name = text('name', 'Kiniro Mosaic');
    const enthusiasm = number('enthusiasm', 7);

    return {
      components: { Hello },
      template: `<Hello name="${name}" :initialEnthusiasm="${enthusiasm}" />`,
    };
  });
