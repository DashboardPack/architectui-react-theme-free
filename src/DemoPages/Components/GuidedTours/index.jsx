import { Fragment, useEffect, useState } from 'react';
import { TourProvider, useTour } from '@reactour/tour';

import Demo from './Examples/Demo';
import Text from './Examples/Text';
import Glitch from './Examples/Glitch';
import Tooltip from './Examples/Tooltip';
import { Link } from './Examples/Button';

import { CSSTransition, TransitionGroup } from '../../../utils/TransitionWrapper';
import { Row, Col, Card, CardBody } from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';

const tourConfig = [
  {
    selector: '[data-tut="reactour__iso"]',
    content: "Ok, let's start with the name of the Tour that is about to begin.",
  },
  {
    selector: '[data-tut="reactour__logo"]',
    content: 'And this is our cool bus...',
  },
  {
    selector: '[data-tut="reactour__copy"]',
    content: `Keep in mind that you could try and test everything during the Tour.
      For example, try selecting the highlighted text…`,
  },
  {
    selector: '[data-tut="reactour__style"]',
    content: () => (
      <div>
        <Glitch data-glitch="Styled">Styled</Glitch>
        <Text color="#e5e5e5">
          The <Tooltip data-tooltip="this helper ⬇">tourist guide</Tooltip> could be dressed in any
          way, using custom components, styles and so on…
        </Text>
        <Text color="#373737" size=".7em" style={{ marginTop: '.7em' }}>
          <Link href="https://codepen.io/lbebber/full/ypgql/" color="dark" nospaces>
            Text effect
          </Link>{' '}
          by{' '}
          <Link href="https://twitter.com/lucasbebber" color="dark" nospaces>
            Lucas Bebber
          </Link>
        </Text>
      </div>
    ),
  },
  {
    selector: '[data-tut="reactour__goTo"]',
    content: ({ setCurrentStep }) => (
      <div>
        If you wanna go anywhere, skipping places, it is absolutely possible.
        <br />
        &quot;Oh, I forgot something inside the bus&hellip;&quot;{' '}
        <button
          style={{
            border: '1px solid #f7f7f7',
            background: 'none',
            padding: '.3em .7em',
            fontSize: 'inherit',
            display: 'block',
            cursor: 'pointer',
            margin: '1em auto',
          }}
          onClick={() => setCurrentStep(1)}
        >
          Please go back to{' '}
          <span role="img" aria-label="sheep">
            🚌
          </span>
        </button>
      </div>
    ),
  },
  {
    selector: '[data-tut="reactour__position"]',
    position: 'left',
    content: () => (
      <Text>
        The <Tooltip data-tooltip="this helper ⬇">tourist guide</Tooltip> could be positioned where
        you want.
        <br />
        In this case will try to stay in the <strong>left side</strong> if there is available space,
        otherwise will <strong>auto position</strong>.
      </Text>
    ),
  },
  {
    selector: '[data-tut="reactour__scroll"]',
    content:
      'Probably you noted that the Tour scrolled directly to the desired place, and you could control the time also…',
  },
  {
    selector: '[data-tut="reactour__scroll--hidden"]',
    content: 'Also when places are pretty hidden…',
  },
  {
    selector: '[data-tut="reactour__action"]',
    content: 'When arrived on each place you could fire an action, like… (look at the console)',
  },
  {
    selector: '[data-tut="reactour__state"]',
    content: 'And the Tour could be observing changes to update the view, try clicking the button…',
  },
];

function GuidedToursInner() {
  const { setIsOpen } = useTour();
  const [isShowingMore, setIsShowingMore] = useState(false);

  useEffect(() => {
    const keyHandling = (e) => {
      if (e.keyCode === 75) {
        e.preventDefault();
        setIsOpen(true);
      }
    };
    window.addEventListener('keyup', keyHandling);
    return () => window.removeEventListener('keyup', keyHandling);
  }, [setIsOpen]);

  return (
    <Fragment>
      <PageTitle
        heading="Guided Tours"
        subheading="These can be used with other components and elements to create stunning and unique new elements for your UIs."
        icon="pe-7s-paint icon-gradient bg-sunny-morning"
      />
      <TransitionGroup>
        <CSSTransition
          component="div"
          classNames="TabsAnimation"
          appear={true}
          timeout={1500}
          enter={false}
          exit={false}
        >
          <Row>
            <Col md="12">
              <Card className="main-card mb-3">
                <CardBody>
                  <Demo
                    openTour={() => setIsOpen(true)}
                    toggleShowMore={() => setIsShowingMore((v) => !v)}
                    isShowingMore={isShowingMore}
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
}

export default function GuidedToursExample() {
  return (
    <TourProvider
      steps={tourConfig}
      styles={{ popover: (base) => ({ ...base, borderRadius: 5 }) }}
    >
      <GuidedToursInner />
    </TourProvider>
  );
}
