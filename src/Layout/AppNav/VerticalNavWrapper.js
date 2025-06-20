import React, { Fragment } from "react";
// import { useLocation } from "react-router-dom"; // Reserved for future use
import { connect } from "react-redux";
import MetisMenu from "react-metismenu";
import { setEnableMobileMenu } from "../../reducers/ThemeOptions";
import {
  UpgradeNav,
  MainNav,
  ComponentsNav,
  FormsNav,
  WidgetsNav,
  ChartsNav,
} from "./NavItems";

const Nav = ({ enableMobileMenu, setEnableMobileMenu }) => {
  // const location = useLocation(); // Reserved for future path checking

  const toggleMobileSidebar = () => {
    setEnableMobileMenu(!enableMobileMenu);
  };

  // Function to check if path is active (reserved for future use)
  // const isPathActive = (path) => {
  //   return location.pathname.startsWith(path);
  // };

  return (
    <Fragment>
      <h5 className="app-sidebar__heading">Pro Version</h5>
      <MetisMenu content={UpgradeNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

      <h5 className="app-sidebar__heading">Menu</h5>
      <MetisMenu content={MainNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

      <h5 className="app-sidebar__heading">UI Components</h5>
      <MetisMenu content={ComponentsNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

      <h5 className="app-sidebar__heading">Dashboard Widgets</h5>
      <MetisMenu content={WidgetsNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

      <h5 className="app-sidebar__heading">Forms</h5>
      <MetisMenu content={FormsNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

      <h5 className="app-sidebar__heading">Charts</h5>
      <MetisMenu content={ChartsNav} onSelected={toggleMobileSidebar} activeLinkFromLocation
        className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
