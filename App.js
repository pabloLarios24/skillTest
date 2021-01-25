/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  View
} from 'react-native';

// import routes

import Routes from './src/app/routes/routes'

export default class App extends React.Component{
  constructor(){
    super()
   
  }

  
  componentDidMount(){
  }
  

  render(){
    return(
        <Routes/>
    )
  }
}
