import React, {Component, Fragment} from 'react';

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

import {
    toast,
    Slide
} from 'react-toastify';

export default class TitleComponent2 extends Component {
    toggle(name) {
        this.setState({
            [name]: !this.state[name],
            progress: 0.5,
        })
    }

    notify22 = () => this.toastId = toast("Another toastify example!!!", {
        transition: Slide,
        closeButton: true,
        autoClose: 5000,
        position: 'bottom-center',
        type: 'success'
    });

    render() {
        return (
            <Fragment>
                <Button className="btn-shadow me-3" onClick={this.notify22} color="dark"
                        id="Tooltip-123">
                    <FontAwesomeIcon icon={faStar}/>
                </Button>
                <UncontrolledTooltip placement="left" target={'Tooltip-123'}>
                    Show a Toastify notification example!
                </UncontrolledTooltip>
                <UncontrolledDropdown className="d-inline-block">
                    <DropdownToggle color="info" className="btn-shadow" caret>
                        <span className="btn-icon-wrapper pe-2 opacity-7">
                            <FontAwesomeIcon icon={faBusinessTime}/>
                        </span>
                        Buttons
                    </DropdownToggle>
                    <DropdownMenu end>
                        <Nav vertical>
                            <NavItem>
                                <NavLink href="#">
                                    <i className="nav-link-icon lnr-inbox"> </i>
                                    <span>Inbox</span>
                                    <div className="ms-auto badge rounded-pill bg-secondary">86
                                    </div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    <i className="nav-link-icon lnr-book"> </i>
                                    <span>Book</span>
                                    <div className="ms-auto badge rounded-pill bg-danger">5</div>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">
                                    <i className="nav-link-icon lnr-picture"> </i>
                                    <span>Picture</span>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink disabled href="#">
                                    <i className="nav-link-icon lnr-file-empty"> </i>
                                    <span>File Disabled</span>
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Fragment>
        );
    }
}