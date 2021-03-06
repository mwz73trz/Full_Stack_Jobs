import React, { Component } from 'react';
import JobList from '../components/JobList/JobList.js';
import { fetchJobs } from '../api/JobsAPI.js';
import '../App.css'

class HomePage extends Component {
  state = {
    jobs: []
  };

  async componentDidMount() {
    try {
      const jobsJson = await fetchJobs();
      this.setState({ jobs: jobsJson });
    }catch (e) {
      console.error('error fetching jobs: ', e);
    }
  }

  render() {
    return (
      <div class="job-list-container">
        <div class="job-list">
          <JobList jobs={this.state.jobs} />
        </div>
        <br />
        <a href="/jobs/new/">Add New Job</a>
      </div>
    );
  }
}

export default HomePage;