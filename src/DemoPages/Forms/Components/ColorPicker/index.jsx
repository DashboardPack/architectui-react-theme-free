import { Fragment, useState } from 'react';
import { CSSTransition, TransitionGroup } from '../../../../utils/TransitionWrapper';
import { Row, Col, Card, CardBody, Button } from 'reactstrap';

import PageTitle from '../../../../Layout/AppMain/PageTitle';

import {
  Sketch,
  Compact,
  Swatch,
  Github,
  Circle,
  Hue,
  Alpha,
  Block,
  hsvaToHex,
} from '@uiw/react-color';

const palette = [
  '#D0021B',
  '#F5A623',
  '#F8E71C',
  '#8B572A',
  '#7ED321',
  '#417505',
  '#BD10E0',
  '#9013FE',
  '#4A90E2',
  '#50E3C2',
  '#B8E986',
  '#000000',
  '#4A4A4A',
  '#9B9B9B',
  '#FFFFFF',
];

const Centered = ({ children }) => (
  <div className="d-flex justify-content-center">{children}</div>
);

export default function FormColorPicker() {
  const [hsva, setHsva] = useState({ h: 214, s: 60, v: 85, a: 1 });
  const [displayColorPicker, setDisplayColorPicker] = useState(false);
  const hex = hsvaToHex(hsva);
  const onChange = (color) => setHsva(color.hsva);

  return (
    <Fragment>
      <PageTitle
        heading="Forms Color Picker"
        subheading="Color Pickers following the design from Photoshop, Sketch, Chrome, Twitter and more."
        icon="pe-7s-drawer icon-gradient bg-happy-itmeo"
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
          <Row className="mt-2">
            <Col md="4">
              <Card className="main-card mb-3">
                <CardBody>
                  <Button
                    color="primary btn-wide btn-shadow"
                    onClick={() => setDisplayColorPicker((v) => !v)}
                  >
                    Pick Color
                  </Button>
                  {displayColorPicker ? (
                    <div style={{ position: 'absolute', zIndex: 2 }}>
                      <div
                        style={{ position: 'fixed', top: 0, right: 0, bottom: 0, left: 0 }}
                        onClick={() => setDisplayColorPicker(false)}
                      />
                      <Github color={hex} onChange={onChange} />
                    </div>
                  ) : null}
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <Centered>
                    <Sketch color={hex} onChange={onChange} />
                  </Centered>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="main-card mb-3">
                <CardBody>
                  <Centered>
                    <Swatch colors={palette} color={hex} onChange={onChange} />
                  </Centered>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <Centered>
                    <Block color={hex} onChange={onChange} />
                  </Centered>
                </CardBody>
              </Card>
            </Col>
            <Col md="4">
              <Card className="main-card mb-3">
                <CardBody>
                  <Centered>
                    <Circle colors={palette} color={hex} onChange={onChange} />
                  </Centered>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <Centered>
                    <Compact color={hex} onChange={onChange} />
                  </Centered>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <Hue hue={hsva.h} onChange={(newHue) => setHsva({ ...hsva, ...newHue })} />
                  <div className="mt-3">
                    <Alpha hsva={hsva} onChange={(newAlpha) => setHsva({ ...hsva, ...newAlpha })} />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
}
