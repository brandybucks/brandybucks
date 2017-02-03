import React from 'react';
import {render} from 'react-dom';
import Nav from './Nav.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student_id: '',
    };
  }

  getStudentId(id) {
    this.setState({
      student_id: id
    });
  }

  render () {
    var childrenWithProps = React.cloneElement(this.props.children, {student_id: this.state.student_id});
    return (
      <div className="container">
        <Nav handleSearchInputChange={this.getStudentId.bind(this)} />
        {childrenWithProps}
      </div>
    );
  }
}

export default App;