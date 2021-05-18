import React, { Component } from 'react';
import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

class Job extends Component {
  render() {
    const { name, description, city, state, applied } = this.props;
    return (
      <div>
        <Card>
          <CardBody>
            <CardTitle tag="h1">{ name }</CardTitle>
            <CardText>{ description }</CardText>
            <CardText>{ city }</CardText>
            <CardText>{ state }</CardText>
            <CardText>{ applied }</CardText>
          </CardBody>
        </Card>
      </div>
    )
  }
}

export default Job;