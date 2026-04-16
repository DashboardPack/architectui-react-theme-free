import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import { useResizeDetector } from 'react-resize-detector';

import AppMain from '../../Layout/AppMain';
import AppHeader from '../../Layout/AppHeader';
import AppSidebar from '../../Layout/AppSidebar';
import AppFooter from '../../Layout/AppFooter';
import ThemeOptions from '../../Layout/ThemeOptions';
import useDarkModeSync from '../../hooks/useDarkModeSync';

export default function Main() {
  useDarkModeSync();
  const colorScheme = useSelector((s) => s.ThemeOptions.colorScheme);
  const enableFixedHeader = useSelector((s) => s.ThemeOptions.enableFixedHeader);
  const enableFixedSidebar = useSelector((s) => s.ThemeOptions.enableFixedSidebar);
  const enableFixedFooter = useSelector((s) => s.ThemeOptions.enableFixedFooter);
  const enableClosedSidebar = useSelector((s) => s.ThemeOptions.enableClosedSidebar);
  const enableMobileMenu = useSelector((s) => s.ThemeOptions.enableMobileMenu);
  const enablePageTabsAlt = useSelector((s) => s.ThemeOptions.enablePageTabsAlt);

  const { width, ref } = useResizeDetector();

  return (
    <Fragment>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <ThemeOptions />
      <div ref={ref}>
        <div
          className={cx(
            'app-container app-theme-' + colorScheme,
            { 'fixed-header': enableFixedHeader },
            { 'fixed-sidebar': enableFixedSidebar || width < 992 },
            { 'fixed-footer': enableFixedFooter },
            { 'closed-sidebar': enableClosedSidebar || width < 992 },
            { 'closed-sidebar-mobile': width < 992 },
            { 'sidebar-mobile-open': enableMobileMenu },
            { 'body-tabs-shadow-btn': enablePageTabsAlt }
          )}
        >
          <AppHeader />
          <div className="app-main">
            <AppSidebar />
            <div className="app-main__outer">
              <main id="main-content" className="app-main__inner" tabIndex={-1}>
                <AppMain />
              </main>
              <AppFooter />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
