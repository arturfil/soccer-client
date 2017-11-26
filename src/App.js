import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

//import Components
import Layout from './hoc/Layout/Layout';
import TeamPicker from './containers/TeamPicker/TeamPicker';


class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={TeamPicker} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
