import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import cx from "classnames";

import ResizeDetector from "react-resize-detector";

import AppMain from "../../Layout/AppMain";

const Main = (props) => {
  const [closedSmallerSidebar, setClosedSmallerSidebar] = useState(false);

  const {
    colorScheme,
    enableFixedHeader,
    enableFixedSidebar,
    enableFixedFooter,
    enableClosedSidebar,
    enableMobileMenu,
    enablePageTabsAlt,
  } = props;

  return (
    <ResizeDetector
      handleWidth
      render={({ width }) => (
        <Fragment>
          <div
            className={cx(
              "app-container app-theme-" + colorScheme,
              { "fixed-header": enableFixedHeader },
              { "fixed-sidebar": enableFixedSidebar || width < 1250 },
              { "fixed-footer": enableFixedFooter },
              { "closed-sidebar": enableClosedSidebar || width < 1250 },
              {
                "closed-sidebar-mobile": closedSmallerSidebar || width < 1250,
              },
              { "sidebar-mobile-open": enableMobileMenu },
              { "body-tabs-shadow-btn": enablePageTabsAlt }
            )}>
            <AppMain />
          </div>
        </Fragment>
      )}
    />
  );
};

const mapStateToProp = (state) => ({
  colorScheme: state.ThemeOptions.colorScheme,
  enableFixedHeader: state.ThemeOptions.enableFixedHeader,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableFixedFooter: state.ThemeOptions.enableFixedFooter,
  enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,
});

export default connect(mapStateToProp)(Main);
