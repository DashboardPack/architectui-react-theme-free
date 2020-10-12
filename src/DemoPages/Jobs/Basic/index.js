import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane,
    Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';

const val = "50";

export default class Job extends Component {
    constructor() {
        super();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',

        };
        this.toggle = this.toggle.bind(this);
        this.toggle1 = this.toggle1.bind(this);

    }

    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggle1(tab) {
        if (this.state.activeTab1 !== tab) {
            this.setState({
                activeTab1: tab
            });
        }
    }
    

    render() {

        return (
            <Fragment>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="TabsAnimation"
                    transitionAppear={true}
                    transitionAppearTimeout={0}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div>
                        <PageTitle
                            heading="My Job"
                            subheading="History of all job ever submitted"
                            icon="pe-7s-note2 icon-gradient bg-sunny-morning"
                        />
                        <Row>
                            <Col md="12">
                                <Card className="main-card mb-3">
                                    <div className="card-header">
                                        <div>
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle caret outline className="mb-2 mr-2" color="primary">
                                                Sort by
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Oldest to Newest</DropdownItem>
                                                <DropdownItem>Newest to Oldest</DropdownItem>
                                                <DropdownItem divider/>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                        <UncontrolledButtonDropdown>
                                            <DropdownToggle caret outline className="mb-2 mr-2" color="primary">
                                                Filter by
                                            </DropdownToggle>
                                            <DropdownMenu>
                                                <DropdownItem>Show all job</DropdownItem>
                                                <DropdownItem divider/>
                                                <DropdownItem>Show on going job</DropdownItem>
                                                <DropdownItem>Show on queue job</DropdownItem>
                                                <DropdownItem>Show finished job</DropdownItem>
                                                <DropdownItem>Show cancelled job</DropdownItem>
                                                <DropdownItem>Show failed job</DropdownItem>
                                            </DropdownMenu>
                                        </UncontrolledButtonDropdown>
                                        </div>
                                        <div className="btn-actions-pane-right">
                                        <button className="btn-wide btn btn-info">Next</button>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                                            <thead>
                                            <tr>
                                                <th className="text-center">#</th>
                                                <th>Name</th>
                                                <th className="text-center">Status</th>
                                                <th className="text-center">Actions</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="text-center text-muted">#A001</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar4} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Body cover</div>
                                                                <div className="widget-subheading opacity-7">Status : on queue</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="badge badge-warning w-100">Pending</div>
                                                </td>
                                                <td className="text-center">
                                                    <Button href="#/jobs/detail" color="primary">Details</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#A002</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar3} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Print - Lengan atas</div>
                                                                <div className="widget-subheading opacity-7">Status : finished</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="badge badge-info w-100">Finished</div>
                                                </td>
                                                <td className="text-center">
                                                    <Button href="#/jobs/detail" color="primary">Details</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#A003</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar2} alt="Avatar" />
                                                                </div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Lengan bawah</div>
                                                                <div className="widget-subheading opacity-7">Status : cancelled</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    <div className="badge badge-danger w-100">Cancelled</div>
                                                </td>
                                                <td className="text-center">
                                                    <Button href="#/jobs/detail" color="primary">Details</Button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-center text-muted">#A004</td>
                                                <td>
                                                    <div className="widget-content p-0">
                                                        <div className="widget-content-wrapper">
                                                            <div className="widget-content-left mr-3">
                                                                <div className="widget-content-left">
                                                                    <img width={40} className="rounded-circle" src={avatar1} alt="Avatar" /></div>
                                                            </div>
                                                            <div className="widget-content-left flex2">
                                                                <div className="widget-heading">Print - Mount motor</div>
                                                                <div className="widget-subheading opacity-7">Status : printing</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="text-center">
                                                    {/* <div className="badge badge-success w-100">Printing</div> */}
                                                    <Progress className="mb-3 progress-bar-animated-alt" color="success" value={val}><strong>{val+"%"}</strong></Progress>
                                                </td>
                                                <td className="text-center">
                                                    <Button href="#/jobs/detail" color="primary">Details</Button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
