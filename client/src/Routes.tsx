import * as React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { ChannelList } from './components';
import { Channel } from './containers';

const routes = (
  <BrowserRouter>
    <div id="wrapper">
      <ChannelList />
      <main style={{ margin: '1rem 0 1rem 16rem' }}>
        <Container>
          <Switch>
            <Route exact path="/channels/:channelName" component={Channel} />
            <Route exact path="/" render={() => <h1>Sample Application</h1>} />
          </Switch>
        </Container>
      </main>
    </div>
  </BrowserRouter>
);

render(routes, document.getElementById('app'));
