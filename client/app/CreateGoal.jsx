import React from 'react';
import axios from 'axios';
import {getAllStudents} from './helper/auth.js'
import {addLog} from './helper/auth.js';

module.exports = React.createClass({
  getInitialState: function() {
    return {
      students: [],
      id: '',
      other: 'Not Started',
      log: '',
      types: 1
    }  
  },

  componentWillMount() {
    getAllStudents()
    .then((resp) => {
      this.setState({
        students: resp.data,
      });
    })
    .catch((err) => {
      console.log(err);
    })
  },

  handleOther(e) {
    this.setState({
      other: e.target.value,
    });
  },

  handleStudent(e) {
    this.setState({
      id: e.target.value,
    });
  },

  handleLog(e) {
    this.setState({
      log: e.target.value,
    });
  },

  submitClick(e) {
    e.preventDefault();
    let log = {
      id: this.state.id,
      other: this.state.other,
      log: this.state.log,
      types: this.state.types
    }
    addLog(log)
      .then(function(resp) {
      console.log('log added');
      })
      .catch(function(err) {
        console.log('could not add log', err);
      });
  },

  render: function() {
    return (
      <div id="wrapper">
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-12">
      <div className="formWidth">
      <h1>Add Goal</h1>
      <form onSubmit={this.submitClick}>
        <div className="form-group">
        <label>
        Student:
        </label>
        <select className="form-control custom-select" onChange={this.handleStudent} required>
          <option defaultValue>Select Student</option>
          {this.state.students.map((student, index) => {
            return (
              <option value={student.id} key={index}>{student.first_name} {student.last_name}</option>
              )
            })
          }
        </select>
        </div>
        <div className="form-group">
        <label>
        Goal:
        </label>
        <input type="text" className="form-control" onChange={this.handleLog} required/>
        </div>
        <div className="form-group">
        <label>
        Current Status:
        </label>
        <select className="form-control custom-select" onChange={this.handleOther} required>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Complete">Complete</option>
        </select>
        </div>
        <div className="form-group">
        <button className="btn search-btn">Add goal</button>
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
})