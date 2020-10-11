import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// DASHBOARDS
import Job from './Basic';

// NEW JOB
import NewJob from './Create';

// Layout

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';

const Jobs = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    {/* base */}
                    <Route path={`${match.url}/basic`} component={Job}/>
                    {/* base */}
                    <Route path={`${match.url}/create`} component={NewJob}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Jobs;