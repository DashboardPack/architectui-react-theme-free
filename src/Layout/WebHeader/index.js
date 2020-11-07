import React, {Fragment} from 'react';
import cx from 'classnames';

import {connect} from 'react-redux';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import HeaderLogo from '../WebLogo';

import SearchBox from './Components/SearchBox';
import UserBox from './Components/UserBox';

class WebHeader extends React.Component {
    render() {
        let {
            headerBackgroundColor,
            // enableMobileMenuSmall,
            enableHeaderShadow
        } = this.props;
        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    className={cx("app-header","header-text-light", headerBackgroundColor="bg-premium-dark", {'header-shadow': enableHeaderShadow})}
                    transitionName="HeaderAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={1500}
                    transitionEnter={false}
                    transitionLeave={false}>

                    <a href="/"><HeaderLogo/></a>
                    

                    <div className={cx(
                        "app-header__content",
                        // {'header-mobile-open': enableMobileMenuSmall},
                    )}>
                        {/* <div className="app-header-left">
                            <SearchBox/>
                        </div> */}
                        {/* <div className="app-header-right">
                            <UserBox/>
                        </div> */}
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
    // closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
    headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
    // enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WebHeader);