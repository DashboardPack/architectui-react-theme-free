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
        <div onClick={toggleMobileSidebar}>
          <Hamburger
            toggled={enableMobileMenu}
            toggle={toggleMobileSidebar}
            size={26}
            color="#6c757d"
          />
        </div>
      </div>
      <div className="app-header__menu">
        <span onClick={toggleMobileSmall}>
          <Button
            size="sm"
            className={cx('btn-icon btn-icon-only', { active: enableMobileMenuSmall })}
            color="primary"
            onClick={toggleMobileSmall}
          >
            <div className="btn-icon-wrapper">
              <FontAwesomeIcon icon={faEllipsisV} />
            </div>
          </Button>
        </span>
      </div>
    </Fragment>
  );
}
