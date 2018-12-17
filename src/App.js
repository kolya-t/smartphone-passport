import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {Menu, Container} from 'semantic-ui-react';

import List from './List';
import Smartphone from './Smartphone';

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Menu>
            <Link to='/'>
              <Menu.Item
                name='Home'
              />
            </Link>
          </Menu>

          <Route exact path='/' component={List} />
          <Route path='/:id' component={Smartphone} />
        </Container>
      </Router>
    );
  }
}

export default App;
