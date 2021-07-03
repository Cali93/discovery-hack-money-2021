import React, { Component } from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import DashboardMetrics from '../project-lessons/dashboard-metrics/DashboardMetrics';
import Introduction from '../project-lessons/introduction/Introduction';
import Governance from '../project-lessons/governance/Governance';
import MainProducts from '../project-lessons/main-products/MainProducts';
import FixedInterest from '../project-lessons/main-products/1FixedInterest';
import ZeroCoupon from '../project-lessons/main-products/2ZeroCoupon';
import FloatingRate from '../project-lessons/main-products/3FloatingRate';
import StructuredProducts from '../project-lessons/main-products/4StructuredProducts';
import SecurityAudit from '../project-lessons/main-products/5SecurityAudit';
import Mphv3 from '../project-lessons/main-products/6mphv3';


export class LessonRoutes extends Component {
  render() {
    return (
      // /events/: id
      // / events /: id / details
      <div>
        <Switch>
          <Route exact path="/project/:id/dashboard-metrics" component={DashboardMetrics} />
          <Route exact path="/project/:id/introduction" component={Introduction} />
          <Route exact path="/project/:id/governance" component={Governance} />
          <Route exact path="/project/:id/main-products" component={MainProducts} />
          <Route exact path="/project/:id/fixed-interest" component={FixedInterest} />
          <Route exact path="/project/:id/zero-coupon" component={ZeroCoupon} />
          <Route exact path="/project/:id/floating-rate" component={FloatingRate} />
          <Route exact path="/project/:id/structured-products" component={StructuredProducts} />
          <Route exact path="/project/:id/security-audit" component={SecurityAudit} />
          <Route exact path="/project/:id/mphv3" component={Mphv3} />

          <Redirect from="/project/:id" to="/project/:id/dashboard-metrics" exact />
        </Switch>
      </div>
    )
  }
}

export default withRouter(LessonRoutes)
