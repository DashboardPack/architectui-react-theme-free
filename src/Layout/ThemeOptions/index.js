import React, {Component} from 'react';
import {connect} from 'react-redux';
import cx from 'classnames';

import {
    Button, ListGroup, ListGroupItem, ButtonGroup,
    UncontrolledTooltip
} from 'reactstrap';

import {
    setBackgroundColor,
    setColorScheme,
    setBackgroundImage,
    setBackgroundImageOpacity,
    setEnableBackgroundImage,
    setEnableFixedHeader,
    setEnableHeaderShadow,
    setEnableSidebarShadow,
    setEnableFixedSidebar,
    setEnableFixedFooter,
    setHeaderBackgroundColor,
    setEnablePageTitleSubheading,
    setEnablePageTabsAlt,
    setEnablePageTitleIcon,
} from '../../reducers/ThemeOptions';

import sideBar1 from '../../assets/utils/images/sidebar/abstract1.jpg';
import sideBar2 from '../../assets/utils/images/sidebar/abstract2.jpg';
import sideBar3 from '../../assets/utils/images/sidebar/abstract3.jpg';
import sideBar4 from '../../assets/utils/images/sidebar/abstract4.jpg';
import sideBar5 from '../../assets/utils/images/sidebar/abstract5.jpg';

import sideBar6 from '../../assets/utils/images/sidebar/city1.jpg';
import sideBar7 from '../../assets/utils/images/sidebar/city2.jpg';
import sideBar8 from '../../assets/utils/images/sidebar/city3.jpg';
import sideBar9 from '../../assets/utils/images/sidebar/city4.jpg';
import sideBar10 from '../../assets/utils/images/sidebar/city5.jpg';

import PerfectScrollbar from 'react-perfect-scrollbar';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import {
    faCog,
    faCheck
} from '@fortawesome/free-solid-svg-icons'

class ThemeOptions extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };

    }

    

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    state = {
        showing: false
    };

    toggleEnableBackgroundImage = () => {
        let {enableBackgroundImage, setEnableBackgroundImage} = this.props;
        setEnableBackgroundImage(!enableBackgroundImage);
    }

    toggleEnableFixedHeader = () => {
        let {enableFixedHeader, setEnableFixedHeader} = this.props;
        setEnableFixedHeader(!enableFixedHeader);
    }

    toggleEnableHeaderShadow = () => {
        let {enableHeaderShadow, setEnableHeaderShadow} = this.props;
        setEnableHeaderShadow(!enableHeaderShadow);
    }

    toggleEnableSidebarShadow = () => {
        let {enableSidebarShadow, setEnableSidebarShadow} = this.props;
        setEnableSidebarShadow(!enableSidebarShadow);
    }

    toggleEnableFixedSidebar = () => {
        let {enableFixedSidebar, setEnableFixedSidebar} = this.props;
        setEnableFixedSidebar(!enableFixedSidebar);
    }

    toggleEnablePageTitleIcon = () => {
        let {enablePageTitleIcon, setEnablePageTitleIcon} = this.props;
        setEnablePageTitleIcon(!enablePageTitleIcon);
    }

    toggleEnablePageTitleSubheading = () => {
        let {enablePageTitleSubheading, setEnablePageTitleSubheading} = this.props;
        setEnablePageTitleSubheading(!enablePageTitleSubheading);
    }

    toggleEnablePageTabsAlt = () => {
        let {enablePageTabsAlt, setEnablePageTabsAlt} = this.props;
        setEnablePageTabsAlt(!enablePageTabsAlt);
    }

    toggleEnableFixedFooter = () => {
        let {enableFixedFooter, setEnableFixedFooter} = this.props;
        setEnableFixedFooter(!enableFixedFooter);
    }

    render() {
        let {
            backgroundColor,
            setBackgroundColor,

            headerBackgroundColor,
            setHeaderBackgroundColor,

            colorScheme,
            setColorScheme,

            backgroundImageOpacity,
            setBackgroundImageOpacity,

            enableFixedHeader,
            enableHeaderShadow,
            enableSidebarShadow,
            enableFixedSidebar,
            enableFixedFooter,

            enablePageTitleIcon,
            enablePageTitleSubheading,
            enablePageTabsAlt,

            enableBackgroundImage,
            backgroundImage,
            setBackgroundImage,

        } = this.props;

        const {showing} = this.state;

        return (
            <div className={"ui-theme-settings " + (showing ? 'settings-open' : '')}>
                <Button className="btn-open-options" id="TooltipDemo" color="warning" onClick={() => this.setState({showing: !showing})}>
                    <FontAwesomeIcon icon={faCog} spin  color="#573a04" fixedWidth={false} size="2x"/>
                </Button>
                <UncontrolledTooltip placement="left" target={'TooltipDemo'}>
                    Open Layout Configurator
                </UncontrolledTooltip>
                <div className="theme-settings__inner">
                    <PerfectScrollbar>
                        <div className="theme-settings__options-wrapper">
                            <h3 className="themeoptions-heading"> Layout Options</h3>
                            <div className="p-3">
                                <ListGroup>
                                    <ListGroupItem>
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left me-3">
                                                    <div className="switch has-switch" data-on-label="ON"
                                                         data-off-label="OFF"
                                                         onClick={this.toggleEnableFixedHeader}>
                                                        <div className={cx("switch-animate", {
                                                            'switch-on': enableFixedHeader,
                                                            'switch-off': !enableFixedHeader
                                                        })}>
                                                            <input type="checkbox"/><span
                                                            className="switch-left bg-success">ON</span><label>&nbsp;</label><span
                                                            className="switch-right bg-success">OFF</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        Fixed Header
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Makes the header top fixed, always visible!
                                                    </div>
                                                </div>
                                                <div className={cx("widget-content-right text-success opacity-6", {
                                                    'd-block': enableFixedHeader,
                                                    'd-none': !enableFixedHeader
                                                })}>
                                                    <FontAwesomeIcon size="2x" icon={faCheck}/>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left me-3">
                                                    <div className="switch has-switch" data-on-label="ON"
                                                         data-off-label="OFF"
                                                         onClick={this.toggleEnableFixedSidebar}>
                                                        <div className={cx("switch-animate", {
                                                            'switch-on': enableFixedSidebar,
                                                            'switch-off': !enableFixedSidebar
                                                        })}>
                                                            <input type="checkbox"/><span
                                                            className="switch-left bg-success">ON</span><label>&nbsp;</label><span
                                                            className="switch-right bg-success">OFF</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        Fixed Sidebar
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Makes the sidebar left fixed, always visible!
                                                    </div>
                                                </div>
                                                <div className={cx("widget-content-right text-success opacity-6", {
                                                    'd-block': enableFixedSidebar,
                                                    'd-none': !enableFixedSidebar
                                                })}>
                                                    <FontAwesomeIcon size="2x" icon={faCheck}/>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left me-3">
                                                    <div className="switch has-switch" data-on-label="ON"
                                                         data-off-label="OFF"
                                                         onClick={this.toggleEnableFixedFooter}>
                                                        <div className={cx("switch-animate", {
                                                            'switch-on': enableFixedFooter,
                                                            'switch-off': !enableFixedFooter
                                                        })}>
                                                            <input type="checkbox"/><span
                                                            className="switch-left bg-success">ON</span><label>&nbsp;</label><span
                                                            className="switch-right bg-success">OFF</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        Fixed Footer
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Makes the app footer bottom fixed, always visible!
                                                    </div>
                                                </div>
                                                <div className={cx("widget-content-right text-success opacity-6", {
                                                    'd-block': enableFixedFooter,
                                                    'd-none': !enableFixedFooter
                                                })}>
                                                    <FontAwesomeIcon size="2x" icon={faCheck}/>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                            <h3 className="themeoptions-heading">
                                <div>Header Options</div>
                                <Button size="sm" color="focus"
                                        className={cx("btn-pill btn-shadow btn-wide ms-auto", {active: headerBackgroundColor === ''})}
                                        onClick={() => setHeaderBackgroundColor("")}>
                                    Restore Default
                                </Button>
                            </h3>
                            <div className="p-3">
                                <ListGroup>
                                    <ListGroupItem>
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left me-3">
                                                    <div className="switch has-switch" data-on-label="ON"
                                                         data-off-label="OFF"
                                                         onClick={this.toggleEnableHeaderShadow}>
                                                        <div className={cx("switch-animate", {
                                                            'switch-on': enableHeaderShadow,
                                                            'switch-off': !enableHeaderShadow
                                                        })}>
                                                            <input type="checkbox"/><span
                                                            className="switch-left bg-success">ON</span><label>&nbsp;</label><span
                                                            className="switch-right bg-success">OFF</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        Header Shadow
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Add a shadow for the header!
                                                    </div>
                                                </div>
                                                <div className={cx("widget-content-right text-success opacity-6", {
                                                    'd-block': enableHeaderShadow,
                                                    'd-none': !enableHeaderShadow
                                                })}>
                                                    <FontAwesomeIcon size="2x" icon={faCheck}/>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <h5 className="pb-2">Choose Color Scheme</h5>
                                        <div className="theme-settings-swatches">
                                            <div className={cx("swatch-holder bg-primary", {active: headerBackgroundColor === 'bg-primary header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-primary header-text-light")}/>
                                            <div className={cx("swatch-holder bg-secondary", {active: headerBackgroundColor === 'bg-secondary header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-secondary header-text-light")}/>
                                            <div className={cx("swatch-holder bg-success", {active: headerBackgroundColor === 'bg-success header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-success header-text-light")}/>
                                            <div className={cx("swatch-holder bg-info", {active: headerBackgroundColor === 'bg-info header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-info header-text-light")}/>
                                            <div className={cx("swatch-holder bg-warning", {active: headerBackgroundColor === 'bg-warning header-text-dark'})}
                                                onClick={() => setHeaderBackgroundColor("bg-warning header-text-dark")}/>
                                            <div  className={cx("swatch-holder bg-danger", {active: headerBackgroundColor === 'bg-danger header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-danger header-text-light")}/>
                                            <div className={cx("swatch-holder bg-light", {active: headerBackgroundColor === 'bg-light header-text-dark'})}
                                                onClick={() => setHeaderBackgroundColor("bg-light header-text-dark")}/>
                                            <div className={cx("swatch-holder bg-dark", {active: headerBackgroundColor === 'bg-dark header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-dark header-text-light")}/>
                                            <div className={cx("swatch-holder bg-focus", {active: headerBackgroundColor === 'bg-focus header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-focus header-text-light")}/>
                                            <div className={cx("swatch-holder bg-alternate", {active: headerBackgroundColor === 'bg-alternate header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-alternate header-text-light")}/>

                                            <div className="divider"/>

                                            <div className={cx("swatch-holder bg-vicious-stance", {active: headerBackgroundColor === 'bg-vicious-stance header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-vicious-stance header-text-light")}/>
                                            <div className={cx("swatch-holder bg-midnight-bloom", {active: headerBackgroundColor === 'bg-midnight-bloom header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-midnight-bloom header-text-light")}/>
                                            <div className={cx("swatch-holder bg-night-sky", {active: headerBackgroundColor === 'bg-night-sky header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-night-sky header-text-light")}/>
                                            <div className={cx("swatch-holder bg-slick-carbon", {active: headerBackgroundColor === 'bg-slick-carbon header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-slick-carbon header-text-light")}/>
                                            <div className={cx("swatch-holder bg-asteroid", {active: headerBackgroundColor === 'bg-asteroid header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-asteroid header-text-light")}/>
                                            <div className={cx("swatch-holder bg-royal", {active: headerBackgroundColor === 'bg-royal header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-royal header-text-light")}/>
                                            <div className={cx("swatch-holder bg-warm-flame", {active: headerBackgroundColor === 'bg-warm-flame header-text-dark'})}
                                                onClick={() => setHeaderBackgroundColor("bg-warm-flame header-text-dark")}/>
                                            <div className={cx("swatch-holder bg-night-fade", {active: headerBackgroundColor === 'bg-night-fade header-text-dark'})}
                                                onClick={() => setHeaderBackgroundColor("bg-night-fade header-text-dark")}/>
                                            <div className={cx("swatch-holder bg-sunny-morning", {active: headerBackgroundColor === 'bg-sunny-morning header-text-dark'})}
                                                onClick={() => setHeaderBackgroundColor("bg-sunny-morning header-text-dark")}/>
                                            <div className={cx("swatch-holder bg-tempting-azure", {active: headerBackgroundColor === 'bg-tempting-azure header-text-dark'})}
                                                onClick={() => setHeaderBackgroundColor("bg-tempting-azure header-text-dark")}/>
                                            <div className={cx("swatch-holder bg-amy-crisp", {active: headerBackgroundColor === 'bg-amy-crisp header-text-dark'})}
                                                onClick={() => setHeaderBackgroundColor("bg-amy-crisp header-text-dark")}/>
                                            <div className={cx("swatch-holder bg-heavy-rain", {active: headerBackgroundColor === 'bg-heavy-rain header-text-dark'})}
                                                onClick={() => setHeaderBackgroundColor("bg-heavy-rain header-text-dark")}/>
                                            <div className={cx("swatch-holder bg-mean-fruit", {active: headerBackgroundColor === 'bg-mean-fruit header-text-dark'})}
                                                onClick={() => setHeaderBackgroundColor("bg-mean-fruit header-text-dark")}/>
                                            <div className={cx("swatch-holder bg-malibu-beach", {active: headerBackgroundColor === 'bg-malibu-beach header-text-dark'})}
                                                onClick={() => setHeaderBackgroundColor("bg-malibu-beach header-text-dark")}/>
                                            <div className={cx("swatch-holder bg-deep-blue", {active: headerBackgroundColor === 'bg-deep-blue header-text-dark'})}
                                                onClick={() => setHeaderBackgroundColor("bg-deep-blue header-text-dark")}/>
                                            <div className={cx("swatch-holder bg-ripe-malin", {active: headerBackgroundColor === 'bg-ripe-malin header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-ripe-malin header-text-light")}/>
                                            <div className={cx("swatch-holder bg-arielle-smile", {active: headerBackgroundColor === 'bg-arielle-smile header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-arielle-smile header-text-light")}/>
                                            <div className={cx("swatch-holder bg-plum-plate", {active: headerBackgroundColor === 'bg-plum-plate header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-plum-plate header-text-light")}/>
                                            <div className={cx("swatch-holder bg-happy-fisher", {active: headerBackgroundColor === 'bg-happy-fisher header-text-dark'})}
                                                onClick={() => setHeaderBackgroundColor("bg-happy-fisher header-text-dark")}/>
                                            <div className={cx("swatch-holder bg-happy-itmeo", {active: headerBackgroundColor === 'bg-happy-itmeo header-text-dark'})}
                                                onClick={() => setHeaderBackgroundColor("bg-happy-itmeo header-text-dark")}/>
                                            <div className={cx("swatch-holder bg-mixed-hopes", {active: headerBackgroundColor === 'bg-mixed-hopes header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-mixed-hopes header-text-light")}/>
                                            <div className={cx("swatch-holder bg-strong-bliss", {active: headerBackgroundColor === 'bg-strong-bliss header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-strong-bliss header-text-light")}/>
                                            <div className={cx("swatch-holder bg-grow-early", {active: headerBackgroundColor === 'bg-grow-early header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-grow-early header-text-light")}/>
                                            <div className={cx("swatch-holder bg-love-kiss", {active: headerBackgroundColor === 'bg-love-kiss header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-love-kiss header-text-light")}/>
                                            <div className={cx("swatch-holder bg-premium-dark", {active: headerBackgroundColor === 'bg-premium-dark header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-premium-dark header-text-light")}/>
                                            <div className={cx("swatch-holder bg-happy-green", {active: headerBackgroundColor === 'bg-happy-green header-text-light'})}
                                                onClick={() => setHeaderBackgroundColor("bg-happy-green header-text-light")}/>
                                        </div>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                            <h3 className="themeoptions-heading">
                                <div>Sidebar Options</div>
                                <Button size="sm" color="focus"
                                        className={cx("btn-pill btn-shadow btn-wide ms-auto", {active: backgroundColor === ''})}
                                        onClick={() => setBackgroundColor("")}>
                                    Restore Default
                                </Button>
                            </h3>
                            <div className="p-3">
                                <ListGroup>
                                    <ListGroupItem>
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left me-3">
                                                    <div className="switch has-switch" data-on-label="ON"
                                                         data-off-label="OFF"
                                                         onClick={this.toggleEnableBackgroundImage}>
                                                        <div className={cx("switch-animate", {
                                                            'switch-on': enableBackgroundImage,
                                                            'switch-off': !enableBackgroundImage
                                                        })}>
                                                            <input type="checkbox"/>
                                                            <span className="switch-left bg-success">ON</span>
                                                            <label>&nbsp;</label>
                                                            <span className="switch-right bg-success">OFF</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        Sidebar Background Image
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Enable background images for sidebar!
                                                    </div>
                                                </div>
                                                <div className={cx("widget-content-right text-success opacity-6", {
                                                    'd-block': enableBackgroundImage,
                                                    'd-none': !enableBackgroundImage
                                                })}>
                                                    <FontAwesomeIcon size="2x" icon={faCheck}/>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left me-3">
                                                    <div className="switch has-switch" data-on-label="ON"
                                                         data-off-label="OFF"
                                                         onClick={this.toggleEnableSidebarShadow}>
                                                        <div className={cx("switch-animate", {
                                                            'switch-on': enableSidebarShadow,
                                                            'switch-off': !enableSidebarShadow
                                                        })}>
                                                            <input type="checkbox"/>
                                                            <span className="switch-left bg-success">ON</span>
                                                            <label>&nbsp;</label>
                                                            <span className="switch-right bg-success">OFF</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        Sidebar Shadow
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Add a shadow for the sidebar!
                                                    </div>
                                                </div>
                                                <div className={cx("widget-content-right text-success opacity-6", {
                                                    'd-block': enableSidebarShadow,
                                                    'd-none': !enableSidebarShadow
                                                })}>
                                                    <FontAwesomeIcon size="2x" icon={faCheck}/>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <h5 className="pb-2">Choose Color Scheme</h5>
                                        <div className="theme-settings-swatches">
                                            <div className={cx("swatch-holder bg-primary", {active: backgroundColor === 'bg-primary sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-primary sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-secondary", {active: backgroundColor === 'bg-secondary sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-secondary sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-success", {active: backgroundColor === 'bg-success sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-success sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-info", {active: backgroundColor === 'bg-info sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-info sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-warning", {active: backgroundColor === 'bg-warning sidebar-text-dark'})}
                                                onClick={() => setBackgroundColor("bg-warning sidebar-text-dark")}/>
                                            <div className={cx("swatch-holder bg-danger", {active: backgroundColor === 'bg-danger sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-danger sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-light", {active: backgroundColor === 'bg-light sidebar-text-dark'})}
                                                onClick={() => setBackgroundColor("bg-light  sidebar-text-dark")}/>
                                            <div className={cx("swatch-holder bg-dark", {active: backgroundColor === 'bg-dark sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-dark sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-focus", {active: backgroundColor === 'bg-focus sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-focus sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-alternate", {active: backgroundColor === 'bg-alternate sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-alternate sidebar-text-light")}/>

                                            <div className="divider"/>

                                            <div className={cx("swatch-holder bg-vicious-stance", {active: backgroundColor === 'bg-vicious-stance sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-vicious-stance sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-midnight-bloom", {active: backgroundColor === 'bg-midnight-bloom sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-midnight-bloom sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-night-sky", {active: backgroundColor === 'bg-night-sky sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-night-sky sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-slick-carbon", {active: backgroundColor === 'bg-slick-carbon sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-slick-carbon sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-asteroid", {active: backgroundColor === 'bg-asteroid sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-asteroid sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-royal", {active: backgroundColor === 'bg-royal sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-royal sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-warm-flame", {active: backgroundColor === 'bg-warm-flame sidebar-text-dark'})}
                                                onClick={() => setBackgroundColor("bg-warm-flame sidebar-text-dark")}/>
                                            <div
                                                className={cx("swatch-holder bg-night-fade", {active: backgroundColor === 'bg-night-fade sidebar-text-dark'})}
                                                onClick={() => setBackgroundColor("bg-night-fade sidebar-text-dark")}/>
                                            <div className={cx("swatch-holder bg-sunny-morning", {active: backgroundColor === 'bg-sunny-morning sidebar-text-dark'})}
                                                onClick={() => setBackgroundColor("bg-sunny-morning sidebar-text-dark")}/>
                                            <div className={cx("swatch-holder bg-tempting-azure", {active: backgroundColor === 'bg-tempting-azure sidebar-text-dark'})}
                                                onClick={() => setBackgroundColor("bg-tempting-azure sidebar-text-dark")}/>
                                            <div className={cx("swatch-holder bg-amy-crisp", {active: backgroundColor === 'bg-amy-crisp sidebar-text-dark'})}
                                                onClick={() => setBackgroundColor("bg-amy-crisp sidebar-text-dark")}/>
                                            <div className={cx("swatch-holder bg-heavy-rain", {active: backgroundColor === 'bg-heavy-rain sidebar-text-dark'})}
                                                onClick={() => setBackgroundColor("bg-heavy-rain sidebar-text-dark")}/>
                                            <div className={cx("swatch-holder bg-mean-fruit", {active: backgroundColor === 'bg-mean-fruit sidebar-text-dark'})}
                                                onClick={() => setBackgroundColor("bg-mean-fruit sidebar-text-dark")}/>
                                            <div className={cx("swatch-holder bg-malibu-beach", {active: backgroundColor === 'bg-malibu-beach sidebar-text-dark'})}
                                                onClick={() => setBackgroundColor("bg-malibu-beach sidebar-text-dark")}/>
                                            <div className={cx("swatch-holder bg-deep-blue", {active: backgroundColor === 'bg-deep-blue sidebar-text-dark'})}
                                                onClick={() => setBackgroundColor("bg-deep-blue sidebar-text-dark")}/>
                                            <div className={cx("swatch-holder bg-ripe-malin", {active: backgroundColor === 'bg-ripe-malin sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-ripe-malin sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-arielle-smile", {active: backgroundColor === 'bg-arielle-smile sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-arielle-smile sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-plum-plate", {active: backgroundColor === 'bg-plum-plate sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-plum-plate sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-happy-fisher", {active: backgroundColor === 'bg-happy-fisher sidebar-text-dark'})}
                                                onClick={() => setBackgroundColor("bg-happy-fisher sidebar-text-dark")}/>
                                            <div className={cx("swatch-holder bg-happy-itmeo", {active: backgroundColor === 'bg-happy-itmeo sidebar-text-dark'})}
                                                onClick={() => setBackgroundColor("bg-happy-itmeo sidebar-text-dark")}/>
                                            <div className={cx("swatch-holder bg-mixed-hopes", {active: backgroundColor === 'bg-mixed-hopes sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-mixed-hopes sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-strong-bliss", {active: backgroundColor === 'bg-strong-bliss sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-strong-bliss sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-grow-early", {active: backgroundColor === 'bg-grow-early sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-grow-early sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-love-kiss", {active: backgroundColor === 'bg-love-kiss sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-love-kiss sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-premium-dark", {active: backgroundColor === 'bg-premium-dark sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-premium-dark sidebar-text-light")}/>
                                            <div className={cx("swatch-holder bg-happy-green", {active: backgroundColor === 'bg-happy-green sidebar-text-light'})}
                                                onClick={() => setBackgroundColor("bg-happy-green sidebar-text-light")}/>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem
                                        className={cx("theme-settings-swatches", {
                                            'd-block': enableBackgroundImage,
                                            'd-none': !enableBackgroundImage
                                        })}>
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        Background Opacity
                                                    </div>
                                                </div>
                                                <div className="widget-content-right">
                                                    <ButtonGroup size="sm">
                                                        <Button className={cx("btn-shadow opacity-3", {active: backgroundImageOpacity === 'opacity-04'})}
                                                            color="primary"
                                                            onClick={() => setBackgroundImageOpacity("opacity-04")}>4%
                                                        </Button>
                                                        <Button className={cx("btn-shadow opacity-4", {active: backgroundImageOpacity === 'opacity-06'})}
                                                            color="primary"
                                                            onClick={() => setBackgroundImageOpacity("opacity-06")}>6%
                                                        </Button>
                                                        <Button className={cx("btn-shadow opacity-5", {active: backgroundImageOpacity === 'opacity-08'})}
                                                            color="primary"
                                                            onClick={() => setBackgroundImageOpacity("opacity-08")}>8%
                                                        </Button>
                                                        <Button className={cx("btn-shadow opacity-6", {active: backgroundImageOpacity === 'opacity-1'})}
                                                            color="primary"
                                                            onClick={() => setBackgroundImageOpacity("opacity-1")}>10%
                                                        </Button>
                                                        <Button className={cx("btn-shadow opacity-7", {active: backgroundImageOpacity === 'opacity-15'})}
                                                            color="primary"
                                                            onClick={() => setBackgroundImageOpacity("opacity-15")}>15%
                                                        </Button>
                                                        <Button className={cx("btn-shadow opacity-8", {active: backgroundImageOpacity === 'opacity-2'})}
                                                            color="primary"
                                                            onClick={() => setBackgroundImageOpacity("opacity-2")}
                                                        >20%</Button>
                                                    </ButtonGroup>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem
                                        className={cx("theme-settings-swatches", {
                                            'd-block': enableBackgroundImage,
                                            'd-none': !enableBackgroundImage
                                        })}>
                                        <h5>Sidebar Image Background</h5>
                                        <div className="divider"/>
                                        <div className={cx("swatch-holder swatch-holder-img", {active: backgroundImage === sideBar6})}>
                                            <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar6)}>
                                                <img alt=" " src={sideBar6}/>
                                            </button>
                                        </div>
                                        <div className={cx("swatch-holder swatch-holder-img", {active: backgroundImage === sideBar7})}>
                                            <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar7)}>
                                                <img alt=" " src={sideBar7}/>
                                            </button>
                                        </div>
                                        <div className={cx("swatch-holder swatch-holder-img", {active: backgroundImage === sideBar8})}>
                                            <button className="img-holder switch-trigger"
                                               onClick={() => setBackgroundImage(sideBar8)}>
                                                <img alt=" " src={sideBar8}/>
                                            </button>
                                        </div>
                                        <div className={cx("swatch-holder swatch-holder-img", {active: backgroundImage === sideBar9})}>
                                            <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar9)}>
                                                <img alt=" " src={sideBar9}/>
                                            </button>
                                        </div>
                                        <div className={cx("swatch-holder swatch-holder-img", {active: backgroundImage === sideBar10})}>
                                            <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar10)}>
                                                <img alt=" " src={sideBar10}/>
                                            </button>
                                        </div>
                                        <div className={cx("swatch-holder swatch-holder-img", {active: backgroundImage === sideBar1})}>
                                            <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar1)}>
                                                <img alt=" " src={sideBar1}/>
                                            </button>
                                        </div>
                                        <div className={cx("swatch-holder swatch-holder-img", {active: backgroundImage === sideBar2})}>
                                            <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar2)}>
                                                <img alt=" " src={sideBar2}/>
                                            </button>
                                        </div>
                                        <div className={cx("swatch-holder swatch-holder-img", {active: backgroundImage === sideBar3})}>
                                            <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar3)}>
                                                <img alt=" " src={sideBar3}/>
                                            </button>
                                        </div>
                                        <div className={cx("swatch-holder swatch-holder-img", {active: backgroundImage === sideBar4})}>
                                            <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar4)}>
                                                <img alt=" " src={sideBar4}/>
                                            </button>
                                        </div>
                                        <div className={cx("swatch-holder swatch-holder-img", {active: backgroundImage === sideBar5})}>
                                            <button className="img-holder switch-trigger" onClick={() => setBackgroundImage(sideBar5)}>
                                                <img alt=" " src={sideBar5}/>
                                            </button>
                                        </div>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                            <h3 className="themeoptions-heading">
                                <div>Main Content Options</div>
                                <Button size="sm" color="focus"
                                        className={cx("btn-pill btn-shadow btn-wide ms-auto", {active: colorScheme === 'white'})}
                                        onClick={() => setColorScheme("white")}>
                                    Restore Default
                                </Button>
                            </h3>
                            <div className="p-3">
                                <ListGroup>
                                    <ListGroupItem>
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left me-3">
                                                    <div className="switch has-switch" data-on-label="ON"
                                                         data-off-label="OFF"
                                                         onClick={this.toggleEnablePageTitleIcon}>
                                                        <div className={cx("switch-animate", {
                                                            'switch-on': enablePageTitleIcon,
                                                            'switch-off': !enablePageTitleIcon})}>
                                                            <input type="checkbox"/>
                                                            <span className="switch-left bg-success">ON</span>
                                                            <label>&nbsp;</label>
                                                            <span className="switch-right bg-success">OFF</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        Page Title Icon
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Enable the icon box for page titles!
                                                    </div>
                                                </div>
                                                <div className={cx("widget-content-right text-success opacity-6", {
                                                    'd-block': enablePageTitleIcon,
                                                    'd-none': !enablePageTitleIcon})}>
                                                    <FontAwesomeIcon size="2x" icon={faCheck}/>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left me-3">
                                                    <div className="switch has-switch" data-on-label="ON"
                                                         data-off-label="OFF"
                                                         onClick={this.toggleEnablePageTitleSubheading}>
                                                        <div className={cx("switch-animate", {
                                                            'switch-on': enablePageTitleSubheading,
                                                            'switch-off': !enablePageTitleSubheading})}>
                                                            <input type="checkbox"/>
                                                            <span className="switch-left bg-success">ON</span>
                                                            <label>&nbsp;</label>
                                                            <span className="switch-right bg-success">OFF</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        Page Title Description
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Enable the description below page title!
                                                    </div>
                                                </div>
                                                <div className={cx("widget-content-right text-success opacity-6", {
                                                    'd-block': enablePageTitleSubheading,
                                                    'd-none': !enablePageTitleSubheading})}>
                                                    <FontAwesomeIcon size="2x" icon={faCheck}/>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <div className="widget-content p-0">
                                            <div className="widget-content-wrapper">
                                                <div className="widget-content-left me-3">
                                                    <div className="switch has-switch" data-on-label="ON"
                                                         data-off-label="OFF"
                                                         onClick={this.toggleEnablePageTabsAlt}>
                                                        <div className={cx("switch-animate", {
                                                            'switch-on': enablePageTabsAlt,
                                                            'switch-off': !enablePageTabsAlt})}>
                                                            <input type="checkbox"/>
                                                            <span className="switch-left bg-success">ON</span>
                                                            <label>&nbsp;</label>
                                                            <span className="switch-right bg-success">OFF</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="widget-content-left">
                                                    <div className="widget-heading">
                                                        Page Section Shadow Tabs
                                                    </div>
                                                    <div className="widget-subheading">
                                                        Enable an alternate style for the page sections tabs!
                                                    </div>
                                                </div>
                                                <div className={cx("widget-content-right text-success opacity-6", {
                                                    'd-block': enablePageTabsAlt,
                                                    'd-none': !enablePageTabsAlt})}>
                                                    <FontAwesomeIcon size="2x" icon={faCheck}/>
                                                </div>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <h5 className="pb-2">Light Color Schemes</h5>
                                        <div className="theme-settings-swatches">
                                            <ButtonGroup className="mt-2">
                                                <Button className={cx("btn-wide btn-shadow btn-primary", {active: colorScheme === 'white'})}
                                                    onClick={() => setColorScheme("white")}>White Theme
                                                </Button>
                                                <Button className={cx("btn-wide btn-shadow btn-primary", {active: colorScheme === 'gray'})}
                                                    onClick={() => setColorScheme("gray")}>Gray Theme
                                                </Button>
                                            </ButtonGroup>
                                        </div>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </div>
                    </PerfectScrollbar>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    backgroundColor: state.ThemeOptions.backgroundColor,
    headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,

    colorScheme: state.ThemeOptions.colorScheme,

    enableFixedHeader: state.ThemeOptions.enableFixedHeader,
    enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
    enableSidebarShadow: state.ThemeOptions.enableSidebarShadow,
    enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
    enableFixedFooter: state.ThemeOptions.enableFixedFooter,


    enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
    enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
    enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,

    enableBackgroundImage: state.ThemeOptions.enableBackgroundImage,
    backgroundImage: state.ThemeOptions.backgroundImage,

    backgroundImageOpacity: state.ThemeOptions.backgroundImageOpacity
});

const mapDispatchToProps = dispatch => ({
    setEnableBackgroundImage: enable => dispatch(setEnableBackgroundImage(enable)),

    setEnableFixedHeader: enable => dispatch(setEnableFixedHeader(enable)),
    setEnableHeaderShadow: enable => dispatch(setEnableHeaderShadow(enable)),
    setEnableSidebarShadow: enable => dispatch(setEnableSidebarShadow(enable)),
    setEnableFixedFooter: enable => dispatch(setEnableFixedFooter(enable)),
    setEnableFixedSidebar: enable => dispatch(setEnableFixedSidebar(enable)),

    setEnablePageTitleIcon: enable => dispatch(setEnablePageTitleIcon(enable)),
    setEnablePageTitleSubheading: enable => dispatch(setEnablePageTitleSubheading(enable)),
    setEnablePageTabsAlt: enable => dispatch(setEnablePageTabsAlt(enable)),

    setBackgroundImage: image => dispatch(setBackgroundImage(image)),

    setColorScheme: color => dispatch(setColorScheme(color)),

    setBackgroundColor: color => dispatch(setBackgroundColor(color)),

    setHeaderBackgroundColor: color => dispatch(setHeaderBackgroundColor(color)),

    setBackgroundImageOpacity: color => dispatch(setBackgroundImageOpacity(color))
});

export default connect(mapStateToProps, mapDispatchToProps)(ThemeOptions);
