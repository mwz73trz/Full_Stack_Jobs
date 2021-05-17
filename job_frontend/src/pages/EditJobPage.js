import React, { Component } from 'react';
import { fetchJobByID, editJob } from '../api/JobsAPI.js';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { Redirect } from 'react-router-dom'

class EditJobPage extends Component {
  state = {
    job: ''
  };

  async componentDidMount() {
    try {
      const jobJson = await fetchJobByID(this.props.match.params.jobID);
      this.setState({ job: jobJson });
    } catch (e) {
      console.error('error fetching job: ', e);
    }
  }

  handleChange = (e) => {
    e.persist();
    this.setState(prevState => ({
      job: { ...prevState.job, [e.target.name]: e.target.value }
    }))
  }

  handleFormSubmit = async (event) => {
    event.preventDefault()
    const jobObject = {
      name: event.target.elements[0].value,
      description: event.target.elements[1].value,
      city: event.target.elements[2].value,
      state: event.target.elements[3].value,
      applied: event.target.elements[4].value
    }

    try {
      const response = await editJob(jobObject, this.props.match.params.jobID);
      if (response.ok === true) {
        this.setState({ redirect: true });
        this.componentDidMount()
      } else {
        const jsonData = await response.json();
        alert(jsonData.error.message)
      }
    }catch (err) {
      console.error('error occurred posting job: ', err);
    }
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={`/jobs/${this.state.job.id}/`} />
    }

    return (
      <div>
        <h1>Edit Job for: {this.state.job.name}</h1>
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for="name">Job Name</Label>
            <Input type="text" value={this.state.job.name}  onChange={this.handleChange} name="name" id="name"></Input>
          </FormGroup>

          <FormGroup>
            <Label for="description">Job Description</Label>
            <Input type="text" value={this.state.job.description} name="description" id="description"></Input>
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" value={this.state.job.city} name="city" id="city"></Input>
          </FormGroup>

          <FormGroup>
            <Label for="state">State</Label>
            <Input type="text" value={this.state.job.state} name="state" id="state"></Input>
          </FormGroup>

          <FormGroup>
            <Label for="state">Applied</Label>
            <Input type="text" value={this.state.job.applied} name="applied" id="applied"></Input>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default EditJobPage;