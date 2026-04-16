import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';

import PerfectScrollbar from 'react-perfect-scrollbar';

import Nav from '../AppNav/VerticalNavWrapper';
import HeaderLogo from '../AppLogo';
import { CSSTransition, TransitionGroup } from '../../utils/TransitionWrapper';
import { setEnableMobileMenu } from '../../reducers/ThemeOptions';

export default function AppSidebar() {
  const enableBackgroundImage = useSelector((s) => s.ThemeOptions.enableBackgroundImage);
  const enableSidebarShadow = useSelector((s) => s.ThemeOptions.enableSidebarShadow);
  const enableMobileMenu = useSelector((s) => s.ThemeOptions.enableMobileMenu);
  const backgroundColor = useSelector((s) => s.ThemeOptions.backgroundColor);
  const backgroundImage = useSelector((s) => s.ThemeOptions.backgroundImage);
  const backgroundImageOpacity = useSelector((s) => s.ThemeOptions.backgroundImageOpacity);
  const dispatch = useDispatch();

  const toggleMobileSidebar = () => dispatch(setEnableMobileMenu(!enableMobileMenu));

  return (
    <Fragment>
      <div
        className="sidebar-mobile-overlay"
        role="button"
        tabIndex={enableMobileMenu ? 0 : -1}
        aria-label="Close navigation menu"
        aria-hidden={!enableMobileMenu}
        onClick={toggleMobileSidebar}
        onKeyDown={(e) => {
          if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMobileSidebar();
          }
        }}
      />
      <TransitionGroup>
        <CSSTransition
          component="div"
          className={cx('app-sidebar', backgroundColor, {
            'sidebar-shadow': enableSidebarShadow,
          })}
          id="app-sidebar"
          role="navigation"
          aria-label="Primary"
          appear={true}
          enter={false}
          exit={false}
          timeout={500}
        >
          <div>
            <HeaderLogo />
            <PerfectScrollbar>
              <div className="app-sidebar__inner">
                <Nav />
              </div>
            </PerfectScrollbar>
            <div
              className={cx('app-sidebar-bg', backgroundImageOpacity)}
              style={{
                backgroundImage: enableBackgroundImage ? `url(${backgroundImage})` : null,
              }}
            />
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
}
