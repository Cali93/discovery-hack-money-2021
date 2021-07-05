import React from 'react';
import { withRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { toKebabCase } from '../../../../utils';
import '../../../../App.css';
const LessonRoutes = ({ sections, isDecrypted = false }) => {
  return (
    <div>
      <Switch>
        {sections.map((section) => {
          return (
            <Route key={section.id} exact path={`/project/:id/${!isDecrypted ? toKebabCase(section.title) : `decrypted/${toKebabCase(section.title)}` }`} render={() => section.title !== 'YouTube' ? (
              <>
              <Typography variant="h4">{section.title}</Typography>
              {/* TODO: THIS IS A HACK, our content won't be rendered this way in production */}
              <div className="content" dangerouslySetInnerHTML={{__html: section.content}} />
              </>
            ) : (
              <>
              <Typography variant="h4">{section.title}</Typography>
              <iframe width="800" height="500" src={section.content} title={section.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </>
              )}/>
          )
        })}
        <Redirect from={isDecrypted ? `/project/:id/decrypted` : `/project/:id`} to={isDecrypted ? `/project/:id/decrypted/introduction` : `/project/:id/introduction`} exact />
      </Switch>
    </div>
  )
}

export default withRouter(LessonRoutes)
