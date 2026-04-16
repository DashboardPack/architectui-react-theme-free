import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import { CSSTransition, TransitionGroup } from '../../utils/TransitionWrapper';

import HeaderLogo from '../AppLogo';

import SearchBox from './Components/SearchBox';
import UserBox from './Components/UserBox';

export default function Header() {
  const headerBackgroundColor = useSelector((s) => s.ThemeOptions.headerBackgroundColor);
  const enableMobileMenuSmall = useSelector((s) => s.ThemeOptions.enableMobileMenuSmall);
  const enableHeaderShadow = useSelector((s) => s.ThemeOptions.enableHeaderShadow);

  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition
          component="header"
          className={cx('app-header', headerBackgroundColor, {
            'header-shadow': enableHeaderShadow,
          })}
          role="banner"
          appear={true}
          timeout={1500}
          enter={false}
          exit={false}
        >
          <HeaderLogo />
          <div
            className={cx('app-header__content', {
              'header-mobile-open': enableMobileMenuSmall,
            })}
          >
            <div className="app-header-left">
              <SearchBox />
            </div>
            <div className="app-header-right">
              <UserBox />
            </div>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
}
