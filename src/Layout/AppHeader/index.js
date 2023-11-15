import React, { Fragment } from "react";
import cx from "classnames";

import { connect } from "react-redux";

import { CSSTransition, TransitionGroup } from 'react-transition-group';

import HeaderLogo from "../AppLogo";

import SearchBox from "./Components/SearchBox";
import UserBox from "./Components/UserBox";

class Header extends React.Component {
  render() {
    let {
      headerBackgroundColor,
      enableMobileMenuSmall,
      enableHeaderShadow,
    } = this.props;
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div"
            className={cx("app-header", headerBackgroundColor, {
              "header-shadow": enableHeaderShadow,
            })}
            appear={true} timeout={1500} enter={false} exit={false}>
            <div>
              <HeaderLogo />
              <div className={cx("app-header__content", {
                  "header-mobile-open": enableMobileMenuSmall,
                })}>
                <div className="app-header-left">
                  <SearchBox />
                </div>
                <div className="app-header-right">
                  <UserBox />
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
