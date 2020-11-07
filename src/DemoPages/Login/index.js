import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// NEW JOB
import LoginForm from './login';

// Layout

import WebHeader from '../../Layout/WebHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';

const Login = ({match}) => (
    <Fragment>
        <WebHeader/>
        <div className="app-main">
            {/* <AppSidebar/> */}
            <div className="app-main__outer">
                <div className="app-main__inner">
                    <LoginForm />
                </div>
                <AppFooter/>
            </div>
        </div>
    </Fragment>
);

export default Login;