import React, { Component, Fragment } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import PerfectScrollbar from "react-perfect-scrollbar";

class ChatExample extends Component {
  render() {
    return (
      <Fragment>
        <div className="scroll-area-sm">
          <PerfectScrollbar>
            <div className="p-3">
              <VerticalTimeline layout="1-column" className="vertical-without-time">
                <VerticalTimelineElement className="vertical-timeline-item"
                  icon={
                    <i className="badge badge-dot badge-dot-xl bg-success">
                      {" "}
                    </i>
                  }>
                  <h4 className="timeline-title">All Hands Meeting</h4>
                  <p>
                    Lorem ipsum dolor sic amet, today at{" "}
                    <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                      12:00 PM
                    </a>
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-item"
                  icon={
                    <i className="badge badge-dot badge-dot-xl bg-warning">
                      {" "}
                    </i>
                  }>
                  <p>
                    Another meeting today, at{" "}
                    <b className="text-danger">12:00 PM</b>
                  </p>
                  <p>
                    Yet another one, at{" "}
                    <span className="text-success">15:00 PM</span>
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-item"
                  icon={
                    <i className="badge badge-dot badge-dot-xl bg-danger">
                      {" "}
                    </i>
                  }>
                  <h4 className="timeline-title">
                    Build the production release
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                    incididunt ut labore et dolore magna elit enim at minim
                    veniam quis nostrud
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-item"
                  icon={
                    <i className="badge badge-dot badge-dot-xl bg-primary">
                      {" "}
                    </i>
                  }>
                  <h4 className="timeline-title text-success">
                    Something not important
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amit,consectetur elit enim at minim
                    veniam quis nostrud
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-item"
                  icon={
                    <i className="badge badge-dot badge-dot-xl bg-success">
                      {" "}
                    </i>
                  }>
                  <h4 className="timeline-title">All Hands Meeting</h4>
                  <p>
                    Lorem ipsum dolor sic amet, today at{" "}
                    <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                      12:00 PM
                    </a>
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-item"
                  icon={
                    <i className="badge badge-dot badge-dot-xl bg-warning">
                      {" "}
                    </i>
                  }>
                  <p>
                    Another meeting today, at{" "}
                    <b className="text-danger">12:00 PM</b>
                  </p>
                  <p>
                    Yet another one, at{" "}
                    <span className="text-success">15:00 PM</span>
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-item"
                  icon={
                    <i className="badge badge-dot badge-dot-xl bg-danger">
                      {" "}
                    </i>
                  }>
                  <h4 className="timeline-title">
                    Build the production release
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amit,consectetur eiusmdd tempor
                    incididunt ut labore et dolore magna elit enim at minim
                    veniam quis nostrud
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement className="vertical-timeline-item"
                  icon={
                    <i className="badge badge-dot badge-dot-xl bg-primary">
                      {" "}
                    </i>
                  }>
                  <h4 className="timeline-title text-success">
                    Something not important
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amit,consectetur elit enim at minim
                    veniam quis nostrud
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </PerfectScrollbar>
        </div>
      </Fragment>
    );
  }
}

export default ChatExample;
