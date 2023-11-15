import React, { Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import {
    Row, Col,
    Card, CardBody, CardTitle, Container
} from 'reactstrap';

import Flag from 'react-flagkit';

const iconData = [
    "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AO", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM",
    "BN", "BO", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX",
    "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "ER", "ES", "ET", "EU", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF",
    "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IO",
    "IQ", "IR", "IS", "IT", "JE", "JM", "JO",
    "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD",
    "ME", "MF", "MG", "MH", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI",
    "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU",
    "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG",
    "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF",
    "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"
];

const iconData2 = [
    "AR", "AS", "BB", "BD", "BE", "BF", "BG", "BH",
];

const FlagIconsExample = () => (
  <Fragment>
    <TransitionGroup>
      <CSSTransition component="div" classNames="TabsAnimation" appear={true}
        timeout={0} enter={false} exit={false}>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Basic Examples</CardTitle>
                  <Row>
                    {iconData2.map((iconName) => (
                      <Col md="2" key={iconName}>
                        <div className="font-icon-wrapper">
                          <Flag country={iconName} />
                          <p>{iconName}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Available Countries Codes</CardTitle>
                  <Row>
                    {iconData.map((iconName) => (
                      <Col md="2" key={iconName}>
                        <div className="font-icon-wrapper">
                          <p className="m-0">{iconName}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </CSSTransition>
    </TransitionGroup>
  </Fragment>
);

export default FlagIconsExample;
