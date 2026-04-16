import { Fragment, useMemo } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import TitleComponent1 from './PageTitleAlt3Examples/Variation1';
import TitleComponent2 from './PageTitleAlt3Examples/Variation2';
import TitleComponent3 from './PageTitleAlt3Examples/Variation3';
import TitleComponent4 from './PageTitleAlt3Examples/Variation4';

const variations = [
  <TitleComponent1 key="v1" />,
  <TitleComponent2 key="v2" />,
  <TitleComponent4 key="v4" />,
];

const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function PageTitleAlt3({ heading, icon }) {
  const enablePageTitleIcon = useSelector((state) => state.ThemeOptions.enablePageTitleIcon);
  const enablePageTitleSubheading = useSelector(
    (state) => state.ThemeOptions.enablePageTitleSubheading
  );

  const action = useMemo(() => pickRandom(variations), []);

  return (
    <Fragment>
      <div className="app-page-title app-page-title-simple">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div>
              <div className="page-title-head center-elem">
                <span
                  className={cx('d-inline-block pe-2', {
                    'd-none': !enablePageTitleIcon,
                  })}
                >
                  <i className={icon} />
                </span>
                <span className="d-inline-block">{heading}</span>
              </div>
              <div
                className={cx('page-title-subheading opacity-10', {
                  'd-none': !enablePageTitleSubheading,
                })}
              >
                <TitleComponent3 />
              </div>
            </div>
          </div>
          <div className="page-title-actions">{action}</div>
        </div>
      </div>
    </Fragment>
  );
}
