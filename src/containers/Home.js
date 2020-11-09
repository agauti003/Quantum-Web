/* eslint-disable no-useless-constructor */

import React, { Component } from 'react';
import Home from '../components/Home'

export default class Workspace extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div> <Home {...this.props} /> </div>
    );
  }
}
