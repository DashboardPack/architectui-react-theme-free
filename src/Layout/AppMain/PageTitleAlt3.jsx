import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import cx from "classnames";

import TitleComponent1 from "./PageTitleAlt3Examples/Variation1";
import TitleComponent2 from "./PageTitleAlt3Examples/Variation2";
import TitleComponent3 from "./PageTitleAlt3Examples/Variation3";
import TitleComponent4 from "./PageTitleAlt3Examples/Variation4";

class PageTitleAlt3 extends Component {
  randomize(myArray) {
    return myArray[Math.floor(Math.random() * myArray.length)];
  }

  render() {
    let {
      enablePageTitleIcon,
      enablePageTitleSubheading,
      heading,
      icon,
    } = this.props;

    var arr = [<TitleComponent1 />, <TitleComponent2 />, <TitleComponent4 />];

    return (
      <Fragment>
        <div className="app-page-title app-page-title-simple">
          <div className="page-title-wrapper">
            <div className="page-title-heading">
              <div>
                <div className="page-title-head center-elem">
                  <span className={cx("d-inline-block pe-2", {
                      "d-none": !enablePageTitleIcon,
                    })}>
                    <i className={icon} />
                  </span>
                  <span className="d-inline-block">{heading}</span>
                </div>
                <div className={cx("page-title-subheading opacity-10", {
                    "d-none": !enablePageTitleSubheading,
                  })}>
                  <TitleComponent3 />
                </div>
              </div>
            </div>
            <div className="page-title-actions">{this.randomize(arr)}</div>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
  enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitleAlt3);
