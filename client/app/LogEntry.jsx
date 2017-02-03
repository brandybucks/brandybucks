import React from 'react';

class LogEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.eachLog.student_id}</td>
        <td>{this.props.eachLog.log}</td>
        <td>{this.props.eachLog.user}</td>
      </tr>
    )
  }
}

export {LogEntry};