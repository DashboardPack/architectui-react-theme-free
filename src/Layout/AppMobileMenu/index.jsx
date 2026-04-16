import { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import cx from 'classnames';

import Hamburger from 'hamburger-react';
import { Button } from 'reactstrap';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { setEnableMobileMenu, setEnableMobileMenuSmall } from '../../reducers/ThemeOptions';

export default function AppMobileMenu() {
  const enableMobileMenu = useSelector((s) => s.ThemeOptions.enableMobileMenu);
  const enableMobileMenuSmall = useSelector((s) => s.ThemeOptions.enableMobileMenuSmall);
  const dispatch = useDispatch();

  const toggleMobileSidebar = () => dispatch(setEnableMobileMenu(!enableMobileMenu));
  const toggleMobileSmall = () => dispatch(setEnableMobileMenuSmall(!enableMobileMenuSmall));

  return (
    <Fragment>
      <div className="app-header__mobile-menu">
        <div
          role="button"
          tabIndex={0}
          aria-label={enableMobileMenu ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={enableMobileMenu}
          aria-controls="app-sidebar"
          onClick={toggleMobileSidebar}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              toggleMobileSidebar();
            }
          }}
        >
          <Hamburger
            toggled={enableMobileMenu}
            toggle={toggleMobileSidebar}
            size={26}
            color="#6c757d"
          />
        </div>
      </div>
      <div className="app-header__menu">
        <Button
          type="button"
          size="sm"
          className={cx('btn-icon btn-icon-only', { active: enableMobileMenuSmall })}
          color="primary"
          onClick={toggleMobileSmall}
          aria-label="Toggle header menu"
          aria-pressed={enableMobileMenuSmall}
        >
          <div className="btn-icon-wrapper">
            <FontAwesomeIcon icon={faEllipsisV} />
          </div>
        </Button>
      </div>
    </Fragment>
  );
}
