import { configure } from '@storybook/react';
import 'semantic-ui-css/semantic.min.css';

function requireAll(context) {
  context.keys().forEach(context);
}

function loadStories() {
  requireAll(require.context('../src/', true, /\.story\.ts(x?)$/));
  requireAll(require.context('../stories/', true, /\.story\.ts(x?)$/));
}

configure(loadStories, module);
