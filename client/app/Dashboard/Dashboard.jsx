import React from 'react';
import Panel from './Panel.jsx';
import Preview from './Preview.jsx'

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      panel: 'welcome',
      preview: '../welcome.png'
    }

    this.handleHover = this.handleHover.bind(this);
    this.selectDesc = this.selectDesc.bind(this);
  }

  componentWillUnmount() {
    this.props.handleSideBarLinks([])
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sideBarLinks.length === 0) {
      this.props.handleSideBarLinks(this.selectSideBarLinks(nextProps.status));
    }


  }
  // ----------------------------------------------
  // Event Handlers
  // ----------------------------------------------
  handleHover(panel) {
    this.setState({
      panel: panel,
      preview: `../${panel}.png`
    });
  }

  // ----------------------------------------------
  // Helper Functions
  // ----------------------------------------------
  selectDesc(panel) {
    const descriptions = {
      welcome: `Welcome to the llama Dashboard`,
      children: 'Check on your child\'s progress',
      students: 'Check your students\' progress',
      calendar: 'Manage your appointments with parents',
      schedule: 'Book appointments with teachers',
      settings: 'Update your personal settings'
    }
    return descriptions[panel];
  }

  selectSideBarLinks(status) {
    if (status === 'teacher') {
      return [
        {
          name: 'Home',
          endpoint: '/'
        },
        {
          name: 'Students',
          endpoint: '/students'
        },
        {
          name: 'Calendar',
          endpoint: '/calendar'
        },
        {
          name: 'Settings',
          endpoint: '/settings'
        },
        {
          name: 'Message',
          endpoint: '/message'
        }
      ]
    } else {
      return [
        {
          name: 'Home',
          endpoint: '/'
        },
        {
          name: 'Children',
          endpoint: '/children'
        },
        {
          name: 'Schedule',
          endpoint: '/schedule'
        },
        {
          name: 'Settings',
          endpoint: '/settings'
        },
        {
          name: 'Message',
          endpoint: '/message'
        }
      ]
    }
  }

  render() {
    let panels = null;
    if (this.props.status === 'teacher') {
      panels = [
        <Panel key={1} inDashboard={true} hover={this.handleHover} title="Students" icon="graduation-cap" />,
        <Panel key={2} inDashboard={true} hover={this.handleHover} title="Calendar" icon="calendar-check-o"/>,
        <Panel key={3} inDashboard={true} hover={this.handleHover} title="Settings" icon="cog"/>
      ]
    } else {
      panels = [
        <Panel key={1} inDashboard={true} hover={this.handleHover} title="Children" icon="child" />,
        <Panel key={2} inDashboard={true} hover={this.handleHover} title="Schedule" icon="calendar-check-o"/>,
        <Panel key={3} inDashboard={true} hover={this.handleHover} title="Settings" icon="cog"/>
      ]
    }

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            {panels}
          </div>
          <div className="col-md-9">
            <Preview img={this.state.preview} desc={this.selectDesc(this.state.panel)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
