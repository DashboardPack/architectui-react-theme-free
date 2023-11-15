import React, { Fragment } from "react";
import {
  Button,
  UncontrolledPopover,
  PopoverHeader,
  PopoverBody,
} from "reactstrap";

class PopoverItem extends React.Component {
  render() {
    return (
      <span>
        <Button className="me-2 mb-2" color="primary" id={"Popover-" + this.props.id}>
          {this.props.item.text}
        </Button>
        <UncontrolledPopover placement={this.props.item.placement} trigger="legacy" fade={false} target={"Popover-" + this.props.id}>
          <PopoverHeader>Popover Title</PopoverHeader>
          <PopoverBody>
            Sed posuere consectetur est at lobortis. Aenean eu leo quam.
            Pellentesque ornare sem lacinia quam venenatis vestibulum.
          </PopoverBody>
        </UncontrolledPopover>
      </span>
    );
  }
}

class PopoversBasicExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      popovers: [
        {
          placement: "top",
          text: "Top",
        },
        {
          placement: "bottom",
          text: "Bottom",
        },
        {
          placement: "left",
          text: "Left",
        },
        {
          placement: "right",
          text: "Right",
        },
      ],
    };
  }

  render() {
    return (
      <Fragment>
        <div className="text-center">
          {this.state.popovers.map((popover, i) => {
            return <PopoverItem key={i} item={popover} id={i} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default PopoversBasicExample;
