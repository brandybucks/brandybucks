import React from 'react';

class IEP extends React.Component {
  render () {
    return (
      <div id="wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
                  <h1>View IEP</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            <div id="iep">
              <object id="obj" data="http://www.naset.org/fileadmin/user_upload/Forms_Checklist_Etc/IEP/Completed_Sample_IEP.pdf" >IEP cannot be rendered</object>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export {IEP};