import React from "react";
import {
  InputGroup,
  Dropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default class FormInputGroupButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false,
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen,
    });
  }

  render() {
    return (
      <div>
        <InputGroup>
          <Button>I'm a button</Button>{" "}
          <Input />
        </InputGroup>
        <br />
        <InputGroup>
          <Input />
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle caret>Button Dropdown</DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </InputGroup>
        <br />
        <InputGroup>
          <Dropdown addonType="prepend"
            isOpen={this.state.splitButtonOpen} toggle={this.toggleSplit}>
            <Button outline>Split Button</Button>
            <DropdownToggle split outline />
          </Dropdown>
          <Input placeholder="and..." />
          <Button color="secondary">I'm a button</Button>{" "}
        </InputGroup>
      </div>
    );
  }
}
