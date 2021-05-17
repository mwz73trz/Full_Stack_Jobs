import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/jobs/new" component={AddJobPage} />
            <Route exact path="/jobs/:jobID(\d+)" component={JobPage} />
            <Route exact path="/jobs/:jobID(\d+)/edit" component={EditJobPage} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}


export default App;
