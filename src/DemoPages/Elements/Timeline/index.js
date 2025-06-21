import React, {Fragment} from 'react';
import { CSSTransition, TransitionGroup  } from '../../../utils/TransitionWrapper';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import Tabs, { TabPane } from '../../../utils/TabsWrapper';
import { TabContent } from '../../../utils/TabsWrapper';
import { ScrollableInkTabBar } from '../../../utils/TabsWrapper';

// Examples
import TimelineDotBadge from './Examples/DotBadge';
import TimelineIconBadge from './Examples/IconBadge';
import TimelineScrollable from './Examples/ScrollableTimeline';

export default class TimelineExample extends React.Component {

    render() {

        return (
            <Fragment>
                <TransitionGroup>
                    <CSSTransition component="div" classNames="TabsAnimation" appear={true}
                        timeout={1500} enter={false} exit={false}>
                        <div>    
                            <PageTitle heading="Timelines"
                                subheading="Timelines are used to show lists of notifications, tasks or actions in a beautiful way."
                                icon="pe-7s-light icon-gradient bg-malibu-beach"/>
                            <Tabs defaultActiveKey="1"
                                renderTabBar={() => <ScrollableInkTabBar/>}
                                renderTabContent={() => <TabContent/>}
                            >
                                <TabPane tab='Dot Badges' key="1"><TimelineDotBadge/></TabPane>
                                <TabPane tab='Icon Badges' key="2"><TimelineIconBadge/></TabPane>
                                <TabPane tab='Scrollable Timelines' key="3"><TimelineScrollable/></TabPane>
                            </Tabs>
                        </div>
                    </CSSTransition>
                </TransitionGroup>
            </Fragment>
        );
    }
}
