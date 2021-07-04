import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { toKebabCase } from '../../../../utils';

const LessonRoutes = ({ sections }) => {
  return (
    <div>
      <Switch>
        {sections.map((section) => {
          console.log(section.content);
          return (
            <Route key={section.id} exact path={`/project/:id/${toKebabCase(section.title)}`} render={() => section.title !== 'YouTube' ? (
              <>
              <Typography variant="h4">{section.title}</Typography>
              <div style={{paddingRight: '20px'}} dangerouslySetInnerHTML={{__html: section.content}} />
              </>
            ) : (
              <>
              <Typography variant="h4">{section.title}</Typography>
              <iframe width="800" height="500" src={section.content} title={section.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </>
              )}/>
          )
        })}
        {/* <Route exact path="/project/:id/dashboard-metrics" component={DashboardMetrics} />
        <Route exact path="/project/:id/introduction" component={Introduction} />
        <Route exact path="/project/:id/governance" component={Governance} />
        <Route exact path="/project/:id/main-products" component={MainProducts} />
        <Route exact path="/project/:id/fixed-interest" component={FixedInterest} />
        <Route exact path="/project/:id/zero-coupon" component={ZeroCoupon} />
        <Route exact path="/project/:id/floating-rate" component={FloatingRate} />
        <Route exact path="/project/:id/structured-products" component={StructuredProducts} />
        <Route exact path="/project/:id/security-audit" component={SecurityAudit} />
        <Route exact path="/project/:id/mphv3" component={Mphv3} /> */}

        <Redirect from="/project/:id" to="/project/:id/introduction" exact />
      </Switch>
    </div>
  )
}

export default withRouter(LessonRoutes)
