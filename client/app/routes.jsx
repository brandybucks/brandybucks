import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App.jsx';
import {StudentList} from './StudentList.jsx';
import CreateLog from './CreateLog.jsx';
import CreateNote from './CreateNote.jsx';
import CreateGoal from './CreateGoal.jsx';
import {Goals} from './Goals.jsx';
import {IEP} from './IEP.jsx';
import {MeetingNotes} from './MeetingNotes.jsx';
import {ViewLogs} from './ViewLogs.jsx';
import {StudentForm} from './StudentForm.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={StudentList} />
    <Route path="createlog" component={CreateLog} />
    <Route path="goals" component={Goals} />
    <Route path="iep" component={IEP} />
    <Route path="meetingnotes" component={MeetingNotes} />
    <Route path="createnote" component={CreateNote} />
    <Route path="creategoal" component={CreateGoal} />
    <Route path="viewlogs" component={ViewLogs} />
    <Route path="addstudent" component={StudentForm} />
  </Route>
)