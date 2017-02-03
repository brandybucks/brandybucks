import React from 'react';

class LogEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>{this.props.eachLog.first_name} {this.props.eachLog.last_name}</td>
        <td>{this.props.eachLog.user}</td>
        <td>{this.props.eachLog.log}</td>
      </tr>
    )
  }
}

export {LogEntry};