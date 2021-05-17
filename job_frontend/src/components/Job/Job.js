import React, { Component } from 'react';

class Job extends Component {
  render() {
    const { name, description, city, state, applied } = this.props;
    return (
      <div>
        <h1>{ name }</h1>
        <h4>{ description }</h4>
        <h4>{ city }</h4>
        <h4>{ state }</h4>
        <h4>{ applied }</h4>
      </div>
    )
  }
}

export default Job;