import React from 'react';
import {Nav} from './Nav.jsx';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Nav} from './Nav.jsx';
import {StudentList} from './StudentList.jsx';
import {getStudentByName} from './helper/getStudents.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      studentList: [
      {
        first_name: 'Johnny',
        last_name: 'Kwong',
        grade: 'F',
        IEP: 'Very bad student',
        pic: 'no pics'
      },
      {
        first_name: 'Isaac',
        last_name: 'Yoon',
        grade: 'D',
        IEP: 'Very lazy student',
        pic: 'no pics'
      }
      ],
      studentPhoto: '',
      searchInput: '',
      student: ''
    };

    //binding all the method to this context before pass down to components.
    this.handleChangeSearch = this.handleChangeSearch.bind(this);
    this.searchClicked = this.searchClicked.bind(this);
  };

  //create handler method to extract search input box value
  handleChangeSearch (e) {
    this.setState({
      searchInput: e.target.value,
    });
    console.log(this.state.searchInput)
  };

  //create handler method for search button clicked
  searchClicked (e) {
    e.preventDefault()
    console.log('search clicked!!')
    let name = this.state.searchInput
    console.log(this.state.searchInput)
    getStudentByName(name)
      .then((resp) => {
      this.setState({
        student: resp.data,
      });
      })
      .catch((err) => {
      console.log('there is an error', err);
      })
  }

  componentWillMount() {

  }

  render () {
    return (
      <div className="container">
        <StudentList students={this.state.studentList} />
        <Nav searchText={this.handleChangeSearch} searchClicked={this.searchClicked} />
        {this.props.children}
      </div>
    );
  }
}

export default App;