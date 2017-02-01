import React from 'react';

class StudentEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.eachStudent.first_name}
      </div>
    )
  }
}

export {StudentEntry};