import React from 'react';

class GoalEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.eachLog.student_id}</td>
        <td>{this.props.eachLog.log}</td>
        <td>{this.props.eachLog.other}</td>
      </tr>
    )
  }
}

export {GoalEntry};