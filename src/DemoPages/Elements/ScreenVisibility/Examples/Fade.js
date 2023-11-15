import React, { Fragment } from "react";

import cx from "classnames";

import VisibilitySensor from "react-visibility-sensor";

import { ListGroup, ListGroupItem } from "reactstrap";

import PerfectScrollbar from "react-perfect-scrollbar";

const lists = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];
export default class FadeVisibility extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      getElement: null,
    };
  }

  componentDidMount() {
    this.setState(() => {
      return {
        getElement: document.getElementById("sample"),
      };
    });
  }
  render() {
    var containmentDOMRect = this.state.getElement
      ? this.state.getElement
      : null;

    return (
      <Fragment>
        <div id="sample" className="scroll-area-md">
          <PerfectScrollbar>
            <ListGroup flush>
              {lists.map((list) => {
                return containmentDOMRect ? (
                  <VisibilitySensor key={list} containment={containmentDOMRect}>
                    {({ isVisible }) => {
                      return (
                        <ListGroupItem
                          className={cx("animated", {
                            fadeIn: isVisible,
                            fadeOut: !isVisible,
                          })}
                          style={{
                            background: isVisible ? "transparent" : "#f65ca2",
                          }}>
                          I am #{list}
                        </ListGroupItem>
                      );
                    }}
                  </VisibilitySensor>
                ) : null;
              })}
            </ListGroup>
          </PerfectScrollbar>
        </div>
      </Fragment>
    );
  }
}
