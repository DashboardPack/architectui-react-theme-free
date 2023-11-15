import React, {Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PageTitle from '../../../../Layout/AppMain/PageTitle';

import Tabs, {TabPane} from 'rc-tabs';
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples

import FormDropdownExample from './Examples/Dropdown/';
import FormComboboxExample from './Examples/Combobox/';

class FormDropdown extends React.Component {

    render() {
        return (
            <Fragment>
                <TransitionGroup>
                    <CSSTransition component="div" classNames="TabsAnimation" appear={true}
                        timeout={1500} enter={false} exit={false}>
                        <div>    
                            <PageTitle
                                heading="Form Dropdowns"
                                subheading="Widgets that help you build good looking react dropdown menus, easily."
                                icon="pe-7s-volume1 icon-gradient bg-plum-plate"
                            />
                            <Tabs
                                defaultActiveKey="1"
                                renderTabBar={() => <ScrollableInkTabBar/>}
                                renderTabContent={() => <TabContent/>}
                            >
                                <TabPane tab='Dropdown' key="1"><FormDropdownExample/></TabPane>
                                <TabPane tab='Combobox' key="2"><FormComboboxExample/></TabPane>
                            </Tabs>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        )
    }
}

export default FormDropdown;