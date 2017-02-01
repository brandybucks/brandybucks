import React from 'react';
import {StudentEntry} from './StudentEntry.jsx'

class StudentList extends React.Component {
  render () {
    return (
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                  <h1>Students </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              Text
            </div>
            <div>
              {props.students.map((student, index) => {
                return (
                  <StudentEntry eachStudent={student} key={index} />
                )
              })
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {StudentList};