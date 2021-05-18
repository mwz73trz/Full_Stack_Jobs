import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import '../../App.css';

class JobList extends Component {
  render() {
    const { jobs } = this.props;
    return (
      <ListGroup style={{ listStyle: 'none' }}>
        <h1>All Jobs</h1>
        { jobs.map((job, index) => (
          <ListGroupItem key={index} class="job-list-item"> 
            <h3>{job.id}.  <Link to={`/jobs/${job.id}`}>{ job.name }</Link></h3>
          </ListGroupItem>
        )) }
      </ListGroup>
    )
  }
}

export default JobList;