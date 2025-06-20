import React, { Fragment } from "react";
import { connect } from "react-redux";

const AppFooter = ({ enableFixedFooter }) => {
  return (
    <Fragment>
      <div className="app-wrapper-footer">
        <div className="app-footer">
          <div className="app-footer__inner">
            <div className="app-footer-left">
              <ul className="nav">
                <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                    Footer Link 1
                  </a>
                </li>
                <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                    Footer Link 2
                  </a>
                </li>
              </ul>
            </div>
            <div className="app-footer-right">
              <ul className="nav">
                <li className="nav-item">
                  <a href="javascript:void(0);" className="nav-link">
                    Footer Link 3
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="javascript:void(0);"
                    className="nav-link"
                    rel="noopener noreferrer"
                  >
                    <div className="badge badge-success mr-1 ml-0">
                      <small>NEW</small>
                    </div>
                    Footer Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  enableFixedFooter: state.ThemeOptions.enableFixedFooter,
});

export default connect(mapStateToProps)(AppFooter);
