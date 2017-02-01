import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import {StudentList} from './StudentList.jsx';
import {Login} from './Login.jsx';
import {Signup} from './Signup.jsx';
import {CreateLog} from './CreateLog.jsx';
import {Goals} from './Goals.jsx';
import {IEP} from './IEP.jsx';
import {MeetingNotes} from './MeetingNotes.jsx';
import {ViewLogs} from './ViewLogs.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={StudentList} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />
    <Route path="createlog" component={CreateLog} />
    <Route path="goals" component={Goals} />
    <Route path="iep" component={IEP} />
    <Route path="meetingnotes" component={MeetingNotes} />
    <Route path="viewlogs" component={ViewLogs} />
  </Route>
)