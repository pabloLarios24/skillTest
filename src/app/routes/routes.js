//Developer: Pablo Larios

import React, { Component } from 'react';
import { Scene, Router, Stack } from 'react-native-router-flux';
import { Root } from 'native-base';
import { StatusBar, Platform } from 'react-native';

//Import views
import Login from '../views/login';
import Home from '../views/home';
import DetailsCharacter from '../views/detailsCharacter';
import Filters from '../views/filters';

//import style
const colors = require('../styles').colors;

export default class App extends Component {
  constructor(properties) {
    super(properties);
  }

  render() {
    return (
      <Root>
        <StatusBar backgroundColor={colors.principal} barStyle={'light-content'} />
        <Router>
          <Stack hideNavBar key="root">
            {/* <Scene
              hideNavBar
              key="Login"
              back={false}
              component={Login}
              title="Login"
            /> */}
             <Scene
              hideNavBar
              key="Home"
              back={false}
              component={Home}
              title="Home"
            />
            <Scene
              hideNavBar
              key="DetailsCharacter"
              back={false}
              component={DetailsCharacter}
              title="DetailsCharacter"
            /> 
            <Scene
              hideNavBar
              key="Filters"
              back={false}
              component={Filters}
              title="Filters"
            />
          </Stack>
        </Router>
      </Root>
    );
  }
}
