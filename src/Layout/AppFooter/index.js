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
                <li className="nav-item me-3">
                  <button 
                    type="button" 
                    className="nav-link btn btn-link p-0 border-0" 
                    style={{ background: 'none', color: 'inherit', textDecoration: 'none' }}
                  >
                    Footer Link 1
                  </button>
                </li>
                <li className="nav-item me-3">
                  <button 
                    type="button" 
                    className="nav-link btn btn-link p-0 border-0" 
                    style={{ background: 'none', color: 'inherit', textDecoration: 'none' }}
                  >
                    Footer Link 2
                  </button>
                </li>
              </ul>
            </div>
            <div className="app-footer-right">
              <ul className="nav">
                <li className="nav-item me-3">
                  <button 
                    type="button" 
                    className="nav-link btn btn-link p-0 border-0" 
                    style={{ background: 'none', color: 'inherit', textDecoration: 'none' }}
                  >
                    Footer Link 3
                  </button>
                </li>
                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link btn btn-link p-0 border-0"
                    style={{ background: 'none', color: 'inherit', textDecoration: 'none' }}
                  >
                    <div className="badge text-bg-success me-2 ms-0" style={{ color: 'white' }}>
                      <small>NEW</small>
                    </div>
                    Footer Link 4
                  </button>
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
