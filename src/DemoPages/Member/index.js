import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// DASHBOARDS
import Job from './Basic';

// NEW JOB
import NewMember from './Register';

// JOB DETAILS
import JobDetail from './Details';

// Layout

import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';

const Member = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>
            <div className="app-main__outer">
                <div className="app-main__inner">
                    {/* base */}
                    <Route path={`${match.url}/basic`} component={Job}/>
                    {/* create new */}
                    <Route path={`${match.url}/register`} component={NewMember}/>
                    {/* details */}
                    <Route path={`${match.url}/detail`} component={JobDetail}/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Member;