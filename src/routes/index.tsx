import React, { Component } from 'react'
import { Scene, Router, Stack } from 'react-native-router-flux'
import Home from './../components/Home'
export default class Routes extends Component {
  render() {
    return (
      <Router>
        <Stack key='root'>
          <Scene key='Home' component={Home} hideNavBar={true}/>
        </Stack>
      </Router>
    )
  }
}