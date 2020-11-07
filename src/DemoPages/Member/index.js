import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

import NewMember from './Register';

// Layout
import WebHeader from '../../Layout/WebHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';

const Member = ({match}) => (
    <Fragment>
        <WebHeader/>
        <div className="app-main">
            {/* <AppSidebar/> */}
            <div className="container-fluid m-0 p-0">
                <div className="app-main__inner">
                    <NewMember/>
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Member;