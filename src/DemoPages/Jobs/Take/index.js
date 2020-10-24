import React, {Component, Fragment} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classnames from 'classnames';

import {
    Row, Col,
    Button,
    CardHeader,
    Card,
    CardBody,
    Progress,
    TabContent,
    TabPane, Dropdown, UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

import {
    AreaChart, Area, Line,
    ResponsiveContainer,
    Bar,
    BarChart,
    ComposedChart,
    CartesianGrid,
    Tooltip,
    LineChart
} from 'recharts';

import {
    faAngleUp,
    faArrowRight,
    faArrowUp,
    faArrowLeft,
    faCloud
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import avatar1 from '../../../assets/utils/images/avatars/1.jpg';
import avatar2 from '../../../assets/utils/images/avatars/2.jpg';
import avatar3 from '../../../assets/utils/images/avatars/3.jpg';
import avatar4 from '../../../assets/utils/images/avatars/4.jpg';

import Clock from '../../../Component/Clock'

const months = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];

export default class TakeJob extends Component {

    constructor() {
        super();

        var today = new Date(),
        date = (months[today.getMonth()]) + ' ' + today.getDate() +  ', ' + today.getFullYear();

        this.state = {
            dropdownOpen: false,
            activeTab1: '11',
            // TODO : this date is not automatically change when hit 24.00
            date : date
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
                            heading="Technician Board"
                            subheading="Let's work!"
                            icon="pe-7s-car icon-gradient bg-mean-fruit"
                        />
                        <Row>
                            <Col md="4">
                                <Card className="p-0 pb-3 mb-3 widget-chart">
                                    <CardHeader className="mt-0 mb-0 pb-1 pt-1">Current Job</CardHeader>
                                    <div className="widget-numbers">
                                        #A001
                                    </div>
                                    <Col>
                                        <div className="widget-content">
                                            <div className="widget-content-outer">
                                                {/* <div className="widget-content-wrapper">
                                                    <div className="widget-content-left mr-3">
                                                        <div className="widget-numbers fsize-3 text-muted">
                                                            41%
                                                        </div>
                                                    </div>
                                                    <div className="widget-content-right">
                                                        <div className="text-muted opacity-6">
                                                            Generated Leads
                                                        </div>
                                                    </div>
                                                </div> */}
                                                <div className="widget-progress-wrapper mt-1">
                                                    <Progress
                                                        className="progress-bar-sm progress-bar-animated-alt"
                                                        color="success"
                                                        value="41"/>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <div className="widget-description">
                                        {/* <FontAwesomeIcon icon={faAngleUp}/> */}
                                        <span className="pl-1">Time remaining (estimation): 1 hr 2 mins</span>
                                    </div>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="mb-3 p-0 pb-3 bg-grow-early widget-chart text-white">
                                    <CardHeader className="mt-0 mb-0 pb-1 pt-1">Next Job on Queue</CardHeader>
                                    <div className="widget-numbers">
                                        #A002
                                    </div>
                                    <div className="widget-subheading">
                                        Lengan Atas - Astuti
                                    </div>
                                    <a href="#/jobs/detail">
                                        <div className="widget-description text-white">
                                            <span className="pr-1">View this</span>
                                            <FontAwesomeIcon icon={faArrowRight}/>
                                        </div>
                                    </a>
                                </Card>
                            </Col>
                            <Col md="4">
                                <Card className="mb-3 p-0 pb-3 bg-midnight-bloom widget-chart text-white">
                                    <CardHeader className="mt-0 mb-0 pb-1 pt-1">Current Time</CardHeader>
                                    <div className="widget-numbers">
                                        <Clock></Clock>
                                    </div>
                                    <div className="widget-subheading">
                                        {this.state.date}
                                    </div>
                                    <div className="widget-description text-white">
                                        <span className="pr-1">Bandung, Indonesia - 28&deg;</span>
                                        <FontAwesomeIcon icon={faCloud}/>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Card>
                                    <CardHeader>
                                        <div>
                                            Job description
                                        </div>
                                        <div className="btn-actions-pane-right">
                                            <UncontrolledButtonDropdown className="d-inline-block">
                                                <DropdownToggle color="info" className="btn-shadow" caret>
                                                    Take an Action
                                                </DropdownToggle>
                                                <DropdownMenu right>
                                                    <DropdownItem>Finish Current Job</DropdownItem>
                                                    <DropdownItem divider/>
                                                    <DropdownItem>Cancel This Job</DropdownItem>
                                                    <DropdownItem>Download File</DropdownItem>
                                                </DropdownMenu>
                                            </UncontrolledButtonDropdown>
                                        </div>
                                    </CardHeader>
                                    <CardBody>
                                        <Row>
                                            <Col lg={4}><p>Job Type</p></Col>
                                            <Col lg={8}><p><strong>3D Printing</strong></p></Col>
                                        </Row>
                                        <Row>
                                            <Col lg={4}><p>Job Name</p></Col>
                                            <Col lg={8}><p><strong>Body Cover</strong></p></Col>
                                        </Row>
                                        <Row>
                                            <Col lg={4}><p>Owner Name</p></Col>
                                            <Col lg={8}><p><strong>Juleha</strong></p></Col>
                                        </Row>
                                        <Row>
                                            <Col lg={4}><p>Owner Contact</p></Col>
                                            <Col lg={8}><p><strong>081220201798</strong></p></Col>
                                        </Row>
                                        <Row>
                                            <Col lg={4}><p>Material</p></Col>
                                            <Col lg={8}><p><strong>PLA</strong></p></Col>
                                        </Row>
                                        <Row>
                                            <Col lg={4}><p>Material Color</p></Col>
                                            <Col lg={8}><p><strong>RED</strong></p></Col>
                                        </Row>
                                        <Row>
                                            <Col lg={4}><p>File</p></Col>
                                            <Col lg={8}><p><strong><a href=".">body-cover.gcode</a></strong></p></Col>
                                        </Row>
                                    </CardBody>
                                </Card>
                            </Col> 
                        </Row>
                        <Row>
                            <Col md="12">
                                <Card className="main-card mb-3">
                                    {/* <div className="card-header">
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
                                                    <Progress className="mb-3 progress-bar-animated-alt" color="success" value={val}><strong>{val+"%"}</strong></Progress>
                                                </td>
                                                <td className="text-center">
                                                    <Button href="#/jobs/detail" color="primary">Details</Button>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div> */}
                                </Card>
                            </Col>
                        </Row>
                    </div>
                </ReactCSSTransitionGroup>
            </Fragment>
        )
    }
}
