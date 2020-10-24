import React, {Component} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';

import TitleComponent2 from './PageTitleExamples/Variation2'

import {
    UncontrolledDropdown, DropdownToggle, DropdownMenu, Nav, NavItem, NavLink,
    Button,
    UncontrolledTooltip
} from 'reactstrap';

import {
    faStar,
    faBusinessTime

} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

class PageTitle extends Component {

    render() {
        let {
            enablePageTitleIcon,
            enablePageTitleSubheading,

            heading,
            icon,
            subheading,
            button
        } = this.props;

        return (

            <div className="app-page-title">
                <div className="page-title-wrapper">
                    <div className="page-title-heading">
                        <div
                            className={cx("page-title-icon", {'d-none': !enablePageTitleIcon})}>
                            <i className={icon}/>
                        </div>
                        <div>
                            {heading}
                            <div
                                className={cx("page-title-subheading", {'d-none': !enablePageTitleSubheading})}>
                                {subheading}
                            </div>
                        </div>
                    </div>
                    <div className="page-title-actions">
                        {button}
                        {/* <TitleComponent2/> */}
                        
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
    enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);