import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';

class JobList extends Component {
  render() {
    const { jobs } = this.props;
    return (
      <ListGroup>
        <h1>All Jobs</h1>
        { jobs.map((job, index) => (
          <ListGroupItem key={index}>
            <Link to={`/jobs/${job.id}`}>{ job.name }</Link>
          </ListGroupItem>
        )) }
      </ListGroup>
    )
  }
}

export default JobList;