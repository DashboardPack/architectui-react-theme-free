import { Fragment, useState } from 'react';

import { DefaultEditor } from 'react-simple-wysiwyg';

import { CSSTransition, TransitionGroup } from '../../../../../utils/TransitionWrapper';

import { Row, Col, Card, CardBody, CardTitle } from 'reactstrap';

export default function FormWysiwygEditor() {
  const [html, setHtml] = useState('<p>This is an example WYSIWYG editor instance.</p>');

  return (
    <Fragment>
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
              <Card>
                <CardBody>
                  <CardTitle>WYSIWYG Editor</CardTitle>
                  <DefaultEditor value={html} onChange={(e) => setHtml(e.target.value)} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
}
