import React from 'react';
import axios from 'axios';
import {addStudent} from './helper/getStudents.js';

class StudentForm extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      first_name: '',
      last_name: '',
      grade: '',
      IEP: '',
      pic: ''
    }
  };

  handleFirstName(e) {
    this.setState({
      first_name: e.target.value,
    });
  }

  handleLastName(e) {
    this.setState({
      last_name: e.target.value,
    });
  }

  handleGrade(e) {
    this.setState({
      grade: e.target.value,
    });
  }

  handleIEP(e) {
    this.setState({
      IEP: e.target.value,
    });
  }

  handlePic(e) {
    this.setState({
      pic: e.target.value,
    });
  }

  submitClick(e) {
    e.preventDefault();
    let student = {
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      grade: this.state.grade,
      IEP: this.state.IEP,
      pic: this.state.pic
    }
    addStudent(student)
      .then(function(resp) {
      console.log('student added');
      })
      .catch(function(err) {
        console.log('could not add student', err);
      })
  }

  render() {
    return(
      <form onSubmit={this.submitClick}>
        <input type="text" placeholder="First name" onChange={this.handleFirstName} />
        <input type="text" placeholder="Last name" onChange={this.handleLastName} />
        <input type="text" placeholder="Grade" onChange={this.handleGrade} />
        <input type="text" placeholder="IEP" onChange={this.handleIEP} />
        <input type="text" placeholder="pic" onChange={this.handlePic} />
        <button className="btn add-btn">Add a student</button>
      </form>
    )
  }
}