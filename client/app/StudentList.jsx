import React from 'react';
import axios from 'axios';
import {getAllStudents} from './helper/auth.js'
import {StudentEntry} from './StudentEntry.jsx';
import {Link} from 'react-router';

class StudentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      students: []
    };
  }

  componentWillMount() {
    getAllStudents()
    .then((resp) => {
      this.setState({
        students: resp.data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render () {
    return (
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                <h1 className="alignleft">View Students</h1>
                <h3 className="alignright"><Link to="/addstudent"><img src="add.png" height="25px" />Student</Link></h3>
                  <table className="table table-hover" >
                    <thead>
                      <tr>
                        <th className="col-md-4">Photo</th>
                        <th className="col-md-3">First Name</th>
                        <th className="col-md-3">Last Name</th>
                        <th className="col-md-2">Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.students.map((student, index) => {
                          return (
                            <StudentEntry eachStudent={student} key={index} />
                          )
                        })
                      }
                    </tbody>
                  </table>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {StudentList};