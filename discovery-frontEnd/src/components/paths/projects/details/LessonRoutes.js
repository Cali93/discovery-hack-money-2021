import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { toKebabCase } from '../../../../utils';
import ReactMarkdown from 'markdown-to-jsx';

const LessonRoutes = ({ sections }) => {
  return (
    <div style={{maxWidth: '100%'}}>
      <Switch>
        {sections.map((section) => {
          console.log(section.content);
          return (
            <Route key={section.id} exact path={`/project/:id/${toKebabCase(section.title)}`} render={() => (
              <div>
                <ReactMarkdown>
                  {section.content}
                </ReactMarkdown>
              </div>
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
