import React, { Component } from 'react';
import Job from '../components/Job/Job.js';
import { deleteJob, fetchJobByID } from '../api/JobsAPI.js';
import { Link, Redirect } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import '../App.css';

class JobPage extends Component {
  state = {
    job: null,
    redirect: false
  };

  handleDeleteSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await deleteJob(this.props.match.params.jobID);
      if (response.ok === true) {
        this.setState({ redirect: true });
        this.componentDidMount()
      }else {
        const jsonData = await response.json();
        alert (jsonData.error.message);
      }
    }catch (err) {
      console.error ('error occurred deleting job: ', err);
    }
  }

  async componentDidMount() {
    try {
      const jobJson = await fetchJobByID(this.props.match.params.jobID);
      console.log('jobJson: ', jobJson)
      this.setState({ job: jobJson });
    }catch (e) {
      console.error('error fetching job: ', e);
    }
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    return (
      <div className="job-page-container">
        {this.state.job ? <span>
          <Job {...this.state.job  } />
          <Link to={`/jobs/${this.props.match.params.jobID}/edit`}>Edit</Link>
          <br></br>
          <br></br>
          <Button onClick={this.handleDeleteSubmit}>Delete Job</Button>
          <br></br>
          <br></br>
          <Link to={`/`}>BACK TO JOBS</Link>
          </span> : 
          <span>404: Job Not Found</span>
    }
      </div>
    );
  }
}

export default JobPage;