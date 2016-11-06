import React from 'react';
import { render } from 'react-dom';
import {Router,hashHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import ApplicationView from '../../ui/views/ApplicationView';
import ProjectsView from '../../ui/views/ProjectsView';

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  contentFontFamily: 'Roboto, sans-serif'
});

// Configure Routes.
const routes = {
    path: '/',
    component: ApplicationView,
    indexRoute: { component: ProjectsView },
    childRoutes: [
        { path: '/', component: ProjectsView }
    ]
}

export default ( domElement )=>{

    render(
        <MuiThemeProvider muiTheme={muiTheme}>
            <Router history={hashHistory} routes={routes} />
        </MuiThemeProvider>,
        domElement
    )

}
