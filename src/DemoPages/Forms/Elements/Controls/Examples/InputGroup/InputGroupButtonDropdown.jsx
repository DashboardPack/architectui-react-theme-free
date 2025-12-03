import React, { Fragment } from "react";
import {
  Dropdown,
  InputGroup,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

class FormInputGroupButtonDropdown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  render() {
    return (
      <Fragment>
        <InputGroup>
          <Dropdown addonType="prepend" isOpen={this.state.dropdownOpen} toggle={this.toggle} >
            <DropdownToggle caret>Button Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Input />
        </InputGroup>
      </Fragment>
    );
  }
}

export default FormInputGroupButtonDropdown;
