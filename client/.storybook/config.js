import { configure } from '@storybook/react';

function requireAll(context) {
  context.keys().forEach(context);
}

function loadStories() {
  requireAll(require.context('../src/', true, /\.story\.ts(x?)$/));
  requireAll(require.context('../stories/', true, /\.story\.ts(x?)$/));
}

configure(loadStories, module);
