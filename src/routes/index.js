import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UsernameContainer from '../containers/username/UsernameContainer';
import ProjectsContainer from '../containers/projects/ProjectsContainer';
import SingleProjectContainer from '../containers/singleProject/SingleProjectContainer';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:username/:project" component={SingleProjectContainer} />
        <Route path="/:username" component={ProjectsContainer} />
        <Route path="/" component={UsernameContainer} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;
