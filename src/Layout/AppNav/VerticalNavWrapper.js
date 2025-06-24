import React, { Fragment, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { setEnableMobileMenu } from "../../reducers/ThemeOptions";
import {
  UpgradeNav,
  MainNav,
  ComponentsNav,
  FormsNav,
  WidgetsNav,
  ChartsNav,
} from "./NavItems";

const SubMenu = ({ item, toggleMobileSidebar }) => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const location = useLocation();

  const toggleSubMenu = (e) => {
    if (!item.to || item.content) {
      e.preventDefault();
      e.stopPropagation();
      setIsSubMenuOpen(!isSubMenuOpen);
    } else if (item.to && !item.external) {
      toggleMobileSidebar();
    }
  };

  const hasSubmenu = item.content && item.content.length > 0;
  
  // Determine if the parent or any child is active
  const isActive = location.pathname === item.to || 
    (hasSubmenu && item.content.some(child => child.to === location.pathname));

  const LinkComponent = item.external ? 'a' : Link;
  const linkProps = item.external 
    ? { href: item.to, target: "_blank", rel: "noopener noreferrer" }
    : { to: item.to || "#" };

  return (
    <li className={`metismenu-item ${isActive ? "active" : ""}`}>
      <LinkComponent
        {...linkProps}
        className={`metismenu-link ${isActive ? "active" : ""}`}
        onClick={toggleSubMenu}
      >
        <i className={`metismenu-icon ${item.icon}`} />
        {item.label}
        {hasSubmenu && (
          <i className={`metismenu-state-icon pe-7s-angle-${isSubMenuOpen ? 'up' : 'down'}`} />
        )}
      </LinkComponent>
      {hasSubmenu && (
        <ul className={`metismenu-container ${isSubMenuOpen ? "visible" : ""}`}>
          {item.content.map((child, i) => (
            <li key={i} className="metismenu-item">
              <Link
                to={child.to}
                className={`metismenu-link ${
                  location.pathname === child.to ? "active" : ""
                }`}
                onClick={toggleMobileSidebar}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

const Nav = ({ enableMobileMenu, setEnableMobileMenu }) => {
  const toggleMobileSidebar = () => {
    if (enableMobileMenu) {
      setEnableMobileMenu(false);
    }
  };

  const renderMenu = (items) =>
    items.map((item, i) => (
      <SubMenu key={i} item={item} toggleMobileSidebar={toggleMobileSidebar} />
    ));

  return (
    <Fragment>
      <div className="vertical-nav-menu">
        <h5 className="app-sidebar__heading">PRO VERSION</h5>
        <ul className="metismenu-container">{renderMenu(UpgradeNav)}</ul>

        <h5 className="app-sidebar__heading">MENU</h5>
        <ul className="metismenu-container">{renderMenu(MainNav)}</ul>

        <h5 className="app-sidebar__heading">UI Components</h5>
        <ul className="metismenu-container">{renderMenu(ComponentsNav)}</ul>

        <h5 className="app-sidebar__heading">Dashboard Widgets</h5>
        <ul className="metismenu-container">{renderMenu(WidgetsNav)}</ul>

        <h5 className="app-sidebar__heading">Forms</h5>
        <ul className="metismenu-container">{renderMenu(FormsNav)}</ul>

        <h5 className="app-sidebar__heading">Charts</h5>
        <ul className="metismenu-container">{renderMenu(ChartsNav)}</ul>
      </div>
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
