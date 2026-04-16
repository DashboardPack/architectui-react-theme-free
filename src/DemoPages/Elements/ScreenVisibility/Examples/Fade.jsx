import React, { Fragment, useEffect, useRef, useState } from 'react';

import cx from 'classnames';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PerfectScrollbar from 'react-perfect-scrollbar';

import useInView from '../../../../hooks/useInView';

const lists = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function FadeRow({ value, root }) {
  const { ref, isInView } = useInView({ root });
  return (
    <ListGroupItem
      ref={ref}
      className={cx('animated', {
        fadeIn: isInView,
        fadeOut: !isInView,
      })}
      style={{ background: isInView ? 'transparent' : '#f65ca2' }}
    >
      I am #{value}
    </ListGroupItem>
  );
}

export default function FadeVisibility() {
  const scrollRef = useRef(null);
  const [scrollEl, setScrollEl] = useState(null);

  useEffect(() => {
    setScrollEl(scrollRef.current);
  }, []);

  return (
    <Fragment>
      <div id="sample" ref={scrollRef} className="scroll-area-md">
        <PerfectScrollbar>
          <ListGroup flush>
            {lists.map((list) => (
              <FadeRow key={list} value={list} root={scrollEl} />
            ))}
          </ListGroup>
        </PerfectScrollbar>
      </div>
    </Fragment>
  );
}
