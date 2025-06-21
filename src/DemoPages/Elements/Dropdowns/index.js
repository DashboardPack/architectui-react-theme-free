import React, {Fragment} from 'react';
import { CSSTransition, TransitionGroup } from '../../../utils/TransitionWrapper';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import Tabs, { TabPane } from '../../../utils/TabsWrapper';
import { TabContent } from '../../../utils/TabsWrapper';
import { ScrollableInkTabBar } from '../../../utils/TabsWrapper';

// Dropdown Examples

import DropdownStyles from './Examples/DropdownStyles';
import DropdownGridMenus from './Examples/DropdownGridMenus';

export default class DropdownExamples extends React.Component {

    render() {

        return (
            <Fragment>
                <TransitionGroup>
                    <CSSTransition component="div" classNames="TabsAnimation" appear={true}
                        timeout={1500} enter={false} exit={false}>
                        <div>    
                            <PageTitle  heading="Dropdowns"
                                subheading="Multiple styles, actions and effects are available for the ArchitectUI dropdown buttons."
                                icon="pe-7s-umbrella icon-gradient bg-sunny-morning"/>
                            <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar/>}
                                renderTabContent={() => <TabContent/>}>
                                <TabPane tab='Advanced Menus' key="1"><DropdownGridMenus/></TabPane>
                                <TabPane tab='Regular Dropdowns' key="2"><DropdownStyles/></TabPane>
                            </Tabs>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}
