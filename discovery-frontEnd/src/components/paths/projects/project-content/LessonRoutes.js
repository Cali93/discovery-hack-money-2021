import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import Details from './Details';
import DashboardMetrics from '../project-lessons/dashboard-metrics/DashboardMetrics';
import Introduction from '../project-lessons/introduction/Introduction';


export class LessonRoutes extends Component {
  render() {
    return (
      // /events/: id
      // / events /: id / details
      <div>
        <Switch>
          <Route exact path="/project/:id/dashboard-metrics" component={DashboardMetrics} />
          <Route exact path="/project/:id/introduction" component={Introduction} />
          {/* <Route exact path="/events/:id/guests" component={GuestList} />
          <Route exact path="/events/:id/tasks" component={taskList} />
          <Route exact path="/events/:id/add-task" component={AddTask} />
          <Route exact path="/events/:id/polls/create" component={PollForm} />
          <Route exact path="/events/:id/polls" component={Vote} />
          <Route exact path="/events/:id/photos/" component={PhotoFeed} />
          <Route exact path="/events/:id/photos/add" component={PhotoUpload} />

          <Route exact path="/events/:id/edit" component={EditEvent} />
          <Route
            exact
            path="/events/:id/tasks/EditTaskForm/:taskId"
            component={EditTaskForm}
          /> */}
          <Redirect from="/project/:id" to="/project/:id/dashboard-metrics" exact />
        </Switch>
      </div>
    )
  }
}

export default withRouter(LessonRoutes)
