import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import Sticky from "react-sticky-el";

class StickyElements extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          <CSSTransition component="div" classNames="TabsAnimation" appear={true}
            timeout={1500} enter={false} exit={false}>
            <Row>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Top Sticky Elements</CardTitle>
                    <div className="scroll-area-lg scroll-area">
                      <div className="scrollable-block">
                        <Sticky boundaryElement=".scrollable-block" scrollElement=".scroll-area" hideOnBoundaryHit={false}>
                          <div className="dropdown-menu-header m-0">
                            <div className="dropdown-menu-header-inner m-0 rounded bg-primary">
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">
                                  Scrollable Header
                                </h5>
                              </div>
                            </div>
                          </div>
                        </Sticky>
                        <p className="mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Vestibulum sodales ullamcorper vehicula. Duis placerat
                          quam porta lorem lobortis, sit amet sodales mauris
                          finibus. Donec posuere diam at volutpat viverra. Cras
                          fringilla auctor augue sed congue. Maecenas mollis quis
                          enim quis egestas. In sollicitudin mi a pretium varius.
                          Integer eleifend sodales pharetra. Nullam vitae libero
                          sem. Nulla et eros congue, tincidunt ante eu, tincidunt
                          eros. Donec nisl purus, convallis a hendrerit ut,
                          eleifend in lectus. Proin luctus dignissim lacus, in
                          laoreet arcu eleifend non. Quisque viverra ipsum a massa
                          porta convallis. Donec tincidunt imperdiet purus,
                          interdum elementum ante commodo a. Quisque pharetra arcu
                          sapien, vel ornare magna sollicitudin quis.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                      </div>
                      <div className="scrollable-block">
                        <Sticky boundaryElement=".scrollable-block" scrollElement=".scroll-area" hideOnBoundaryHit={false}>
                          <div className="dropdown-menu-header m-0">
                            <div className="dropdown-menu-header-inner m-0 rounded bg-warning">
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">
                                  Scrollable Header
                                </h5>
                              </div>
                            </div>
                          </div>
                        </Sticky>
                        <p className="mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Vestibulum sodales ullamcorper vehicula. Duis placerat
                          quam porta lorem lobortis, sit amet sodales mauris
                          finibus. Donec posuere diam at volutpat viverra. Cras
                          fringilla auctor augue sed congue. Maecenas mollis quis
                          enim quis egestas. In sollicitudin mi a pretium varius.
                          Integer eleifend sodales pharetra. Nullam vitae libero
                          sem. Nulla et eros congue, tincidunt ante eu, tincidunt
                          eros. Donec nisl purus, convallis a hendrerit ut,
                          eleifend in lectus. Proin luctus dignissim lacus, in
                          laoreet arcu eleifend non. Quisque viverra ipsum a massa
                          porta convallis. Donec tincidunt imperdiet purus,
                          interdum elementum ante commodo a. Quisque pharetra arcu
                          sapien, vel ornare magna sollicitudin quis.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                      </div>
                      <div className="scrollable-block">
                        <Sticky boundaryElement=".scrollable-block" scrollElement=".scroll-area" hideOnBoundaryHit={false}>
                          <div className="dropdown-menu-header m-0">
                            <div className="dropdown-menu-header-inner m-0 rounded bg-success">
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">
                                  Scrollable Header
                                </h5>
                              </div>
                            </div>
                          </div>
                        </Sticky>
                        <p className="mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Vestibulum sodales ullamcorper vehicula. Duis placerat
                          quam porta lorem lobortis, sit amet sodales mauris
                          finibus. Donec posuere diam at volutpat viverra. Cras
                          fringilla auctor augue sed congue. Maecenas mollis quis
                          enim quis egestas. In sollicitudin mi a pretium varius.
                          Integer eleifend sodales pharetra. Nullam vitae libero
                          sem. Nulla et eros congue, tincidunt ante eu, tincidunt
                          eros. Donec nisl purus, convallis a hendrerit ut,
                          eleifend in lectus. Proin luctus dignissim lacus, in
                          laoreet arcu eleifend non. Quisque viverra ipsum a massa
                          porta convallis. Donec tincidunt imperdiet purus,
                          interdum elementum ante commodo a. Quisque pharetra arcu
                          sapien, vel ornare magna sollicitudin quis.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                      </div>
                      <div className="scrollable-block">
                        <Sticky boundaryElement=".scrollable-block" scrollElement=".scroll-area" hideOnBoundaryHit={false}>
                          <div className="dropdown-menu-header m-0">
                            <div className="dropdown-menu-header-inner m-0 rounded bg-dark">
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">
                                  Scrollable Header
                                </h5>
                              </div>
                            </div>
                          </div>
                        </Sticky>
                        <p className="mt-3">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Vestibulum sodales ullamcorper vehicula. Duis placerat
                          quam porta lorem lobortis, sit amet sodales mauris
                          finibus. Donec posuere diam at volutpat viverra. Cras
                          fringilla auctor augue sed congue. Maecenas mollis quis
                          enim quis egestas. In sollicitudin mi a pretium varius.
                          Integer eleifend sodales pharetra. Nullam vitae libero
                          sem. Nulla et eros congue, tincidunt ante eu, tincidunt
                          eros. Donec nisl purus, convallis a hendrerit ut,
                          eleifend in lectus. Proin luctus dignissim lacus, in
                          laoreet arcu eleifend non. Quisque viverra ipsum a massa
                          porta convallis. Donec tincidunt imperdiet purus,
                          interdum elementum ante commodo a. Quisque pharetra arcu
                          sapien, vel ornare magna sollicitudin quis.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Bottom Sticky Elements</CardTitle>
                    <div className="scroll-area-lg scroll-area">
                      <div className="scrollable-block">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Vestibulum sodales ullamcorper vehicula. Duis placerat
                          quam porta lorem lobortis, sit amet sodales mauris
                          finibus. Donec posuere diam at volutpat viverra. Cras
                          fringilla auctor augue sed congue. Maecenas mollis quis
                          enim quis egestas. In sollicitudin mi a pretium varius.
                          Integer eleifend sodales pharetra. Nullam vitae libero
                          sem. Nulla et eros congue, tincidunt ante eu, tincidunt
                          eros. Donec nisl purus, convallis a hendrerit ut,
                          eleifend in lectus. Proin luctus dignissim lacus, in
                          laoreet arcu eleifend non. Quisque viverra ipsum a massa
                          porta convallis. Donec tincidunt imperdiet purus,
                          interdum elementum ante commodo a. Quisque pharetra arcu
                          sapien, vel ornare magna sollicitudin quis.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>

                        <Sticky mode="bottom" boundaryElement=".scrollable-block" scrollElement=".scroll-area" hideOnBoundaryHit={false}>
                          <div className="dropdown-menu-header m-0">
                            <div className="dropdown-menu-header-inner m-0 rounded bg-focus">
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">
                                  Scrollable Footer
                                </h5>
                              </div>
                            </div>
                          </div>
                        </Sticky>
                      </div>
                      <div className="scrollable-block">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Vestibulum sodales ullamcorper vehicula. Duis placerat
                          quam porta lorem lobortis, sit amet sodales mauris
                          finibus. Donec posuere diam at volutpat viverra. Cras
                          fringilla auctor augue sed congue. Maecenas mollis quis
                          enim quis egestas. In sollicitudin mi a pretium varius.
                          Integer eleifend sodales pharetra. Nullam vitae libero
                          sem. Nulla et eros congue, tincidunt ante eu, tincidunt
                          eros. Donec nisl purus, convallis a hendrerit ut,
                          eleifend in lectus. Proin luctus dignissim lacus, in
                          laoreet arcu eleifend non. Quisque viverra ipsum a massa
                          porta convallis. Donec tincidunt imperdiet purus,
                          interdum elementum ante commodo a. Quisque pharetra arcu
                          sapien, vel ornare magna sollicitudin quis.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <Sticky mode="bottom" boundaryElement=".scrollable-block" scrollElement=".scroll-area" hideOnBoundaryHit={false}>
                          <div className="dropdown-menu-header m-0">
                            <div className="dropdown-menu-header-inner m-0 rounded bg-success">
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">
                                  Scrollable Footer
                                </h5>
                              </div>
                            </div>
                          </div>
                        </Sticky>
                      </div>
                      <div className="scrollable-block">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Vestibulum sodales ullamcorper vehicula. Duis placerat
                          quam porta lorem lobortis, sit amet sodales mauris
                          finibus. Donec posuere diam at volutpat viverra. Cras
                          fringilla auctor augue sed congue. Maecenas mollis quis
                          enim quis egestas. In sollicitudin mi a pretium varius.
                          Integer eleifend sodales pharetra. Nullam vitae libero
                          sem. Nulla et eros congue, tincidunt ante eu, tincidunt
                          eros. Donec nisl purus, convallis a hendrerit ut,
                          eleifend in lectus. Proin luctus dignissim lacus, in
                          laoreet arcu eleifend non. Quisque viverra ipsum a massa
                          porta convallis. Donec tincidunt imperdiet purus,
                          interdum elementum ante commodo a. Quisque pharetra arcu
                          sapien, vel ornare magna sollicitudin quis.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <Sticky mode="bottom" boundaryElement=".scrollable-block" scrollElement=".scroll-area" hideOnBoundaryHit={false}>
                          <div className="dropdown-menu-header m-0">
                            <div className="dropdown-menu-header-inner m-0 rounded bg-danger">
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">
                                  Scrollable Footer
                                </h5>
                              </div>
                            </div>
                          </div>
                        </Sticky>
                      </div>
                      <div className="scrollable-block">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                          Vestibulum sodales ullamcorper vehicula. Duis placerat
                          quam porta lorem lobortis, sit amet sodales mauris
                          finibus. Donec posuere diam at volutpat viverra. Cras
                          fringilla auctor augue sed congue. Maecenas mollis quis
                          enim quis egestas. In sollicitudin mi a pretium varius.
                          Integer eleifend sodales pharetra. Nullam vitae libero
                          sem. Nulla et eros congue, tincidunt ante eu, tincidunt
                          eros. Donec nisl purus, convallis a hendrerit ut,
                          eleifend in lectus. Proin luctus dignissim lacus, in
                          laoreet arcu eleifend non. Quisque viverra ipsum a massa
                          porta convallis. Donec tincidunt imperdiet purus,
                          interdum elementum ante commodo a. Quisque pharetra arcu
                          sapien, vel ornare magna sollicitudin quis.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <p>
                          Nunc congue magna eget eros blandit, eu viverra magna
                          semper. Nullam in diam a metus dictum consequat. Quisque
                          ultricies, ipsum non euismod semper, velit felis lacinia
                          nibh, et finibus quam leo vitae nisi. Maecenas interdum
                          diam quis risus bibendum, eu fermentum est pharetra. In
                          dictum at enim pretium bibendum. Praesent efficitur
                          iaculis dolor in sodales. Morbi maximus in ipsum in
                          malesuada. Proin semper lacus tempor magna aliquam, sed
                          aliquam dui scelerisque. Donec nisi nulla, rhoncus a
                          tristique eget, ultrices vitae dolor. Ut id urna vitae
                          ante tincidunt pharetra at non metus. Nunc in suscipit
                          nulla. Sed vitae leo vulputate, euismod tortor vel,
                          aliquet velit. Curabitur eget tincidunt elit. Nam et
                          ligula finibus, eleifend velit et, commodo quam.
                          Praesent non libero velit.
                        </p>
                        <Sticky mode="bottom" boundaryElement=".scrollable-block" scrollElement=".scroll-area" hideOnBoundaryHit={false}>
                          <div className="dropdown-menu-header m-0">
                            <div className="dropdown-menu-header-inner m-0 rounded bg-info">
                              <div className="menu-header-content">
                                <h5 className="menu-header-title">
                                  Scrollable Footer
                                </h5>
                              </div>
                            </div>
                          </div>
                        </Sticky>
                      </div>
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
}

export default StickyElements;
