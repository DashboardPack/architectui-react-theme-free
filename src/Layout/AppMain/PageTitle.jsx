import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import TitleComponent1 from './PageTitleExamples/Variation1';
import TitleComponent2 from './PageTitleExamples/Variation2';
import TitleComponent3 from './PageTitleExamples/Variation3';

const variations = [
  <TitleComponent1 key="v1" />,
  <TitleComponent2 key="v2" />,
  <TitleComponent3 key="v3" />,
];

const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];

export default function PageTitle({ heading, icon, subheading }) {
  const enablePageTitleIcon = useSelector((state) => state.ThemeOptions.enablePageTitleIcon);
  const enablePageTitleSubheading = useSelector(
    (state) => state.ThemeOptions.enablePageTitleSubheading
  );

  const action = useMemo(() => pickRandom(variations), []);

  return (
    <div className="app-page-title">
      <div className="page-title-wrapper">
        <div className="page-title-heading">
          <div
            className={cx('page-title-icon', {
              'd-none': !enablePageTitleIcon,
            })}
          >
            <i className={icon} />
          </div>
          <div>
            {heading}
            <div
              className={cx('page-title-subheading', {
                'd-none': !enablePageTitleSubheading,
              })}
            >
              {subheading}
            </div>
          </div>
        </div>
        <div className="page-title-actions">{action}</div>
      </div>
    </div>
  );
}
