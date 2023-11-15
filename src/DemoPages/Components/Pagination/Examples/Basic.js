import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Container,
} from "reactstrap";

const BasicPagination = (props) => {
  return (
    <Fragment>
      <TransitionGroup>
        <CSSTransition component="div" classNames="TabsAnimation" appear={true}
          timeout={0} enter={false} exit={false}>
          <Container fluid>
            <Row>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Basic</CardTitle>
                    <Pagination aria-label="Page navigation example">
                      <PaginationItem>
                        <PaginationLink previous href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">4</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">5</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink next href="#" />
                      </PaginationItem>
                    </Pagination>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Rounded</CardTitle>
                    <Pagination className="pagination-rounded" aria-label="Page navigation example">
                      <PaginationItem>
                        <PaginationLink previous href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem active>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">4</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">5</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink next href="#" />
                      </PaginationItem>
                    </Pagination>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Sizing</CardTitle>
                    <Pagination size="sm" aria-label="Page navigation example">
                      <PaginationItem>
                        <PaginationLink previous href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">4</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">5</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink next href="#" />
                      </PaginationItem>
                    </Pagination>
                    <div className="divider" />
                    <Pagination aria-label="Page navigation example">
                      <PaginationItem>
                        <PaginationLink previous href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink next href="#" />
                      </PaginationItem>
                    </Pagination>
                    <div className="divider" />
                    <Pagination size="lg" aria-label="Page navigation example">
                      <PaginationItem>
                        <PaginationLink previous href="#" />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">2</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink href="#">3</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationLink next href="#" />
                      </PaginationItem>
                    </Pagination>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </CSSTransition>
      </TransitionGroup>
    </Fragment>
  );
};

export default BasicPagination;
