import React, { Component } from 'react';
import { addJob } from '../api/JobsAPI';
import { Redirect } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

class AddJobPage extends Component {
  state = {
    redirect: false
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    const jobObject = {
      name: event.target.elements[0].value,
      description: event.target.elements[1].value,
      city: event.target.elements[2].value,
      state: event.target.elements[3].value
    }

    try {
      const response = await addJob(jobObject);
      console.log(response)
      if (response.ok === true) {
        this.setState({ redirect: true });
      }else {
        const jsonData = await response.json();
        alert(jsonData.error.message);
      }
    }catch (err) {
      console.error('error occurred posting job: ', err);
    }
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for="name">Job Name</Label>
            <Input type="text" name="name" id="name"></Input>
          </FormGroup>

          <FormGroup>
            <Label for="description">Job Description</Label>
            <Input type="text" name="description" id="description"></Input>
          </FormGroup>

          <FormGroup>
            <Label for="city">City</Label>
            <Input type="text" name="city" id="city"></Input>
          </FormGroup>

          <FormGroup>
            <Label for="state">State</Label>
            <Input type="text" name="state" id="state"></Input>
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )
  }
}

export default AddJobPage;