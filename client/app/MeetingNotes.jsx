import React from 'react';

class MeetingNotes extends React.Component {
  render () {
    return (
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                  <h1>Meeting Notes</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              Text
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {MeetingNotes};