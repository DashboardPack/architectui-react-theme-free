import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import { Row, Col, Card, CardBody } from "reactstrap";

import DataTable from 'react-data-table-component';

import PageTitle from "../../../../Layout/AppMain/PageTitle";

import { makeData } from "./utils";

export default class DataTableBasic extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
    };
  }

  render() {
    const { data } = this.state;

    const columns = [
      {
        name: "First Name",
        selector: row => row.firstName,
        sortable: true,
      },
      {
        name: "Last Name",
        id: "lastName",
        selector: row => row.lastName,
        sortable: true,
      },
    
      {
        name: "Age",
        selector: row => row.age,
        sortable: true,
      },
      {
        name: "Status",
        selector: row => row.status,
        sortable: true,
      },
    
      {
        name: "Visits",
        selector: row => row.visits,
        sortable: true,
        },
    ];

    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <div>
              <PageTitle heading="Data Tables"
                subheading="Choose between regular React Bootstrap tables or advanced dynamic ones."
                icon="pe-7s-medal icon-gradient bg-tempting-azure"/>
              <Row>
                <Col md="12">
                  <Card className="main-card mb-3">
                    <CardBody>
                      <DataTable data={data}
                        columns={columns}
                        pagination 
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div> 
          </CSSTransition>
        </TransitionGroup>
      </Fragment>
    );
  }
}
