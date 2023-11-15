import React, { Component, Fragment } from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import PerfectScrollbar from "react-perfect-scrollbar";

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../../assets/utils/images/avatars/3.jpg";
import avatar4 from "../../../../assets/utils/images/avatars/4.jpg";
import avatar5 from "../../../../assets/utils/images/avatars/5.jpg";
import avatar6 from "../../../../assets/utils/images/avatars/8.jpg";
import avatar7 from "../../../../assets/utils/images/avatars/9.jpg";
import avatar8 from "../../../../assets/utils/images/avatars/10.jpg";

class TimelineEx extends Component {
  render() {
    return (
      <Fragment>
        <div className="scroll-area-sm">
          <PerfectScrollbar>
            <div className="p-3">
              <div className="notifications-box">
                <VerticalTimeline animate={false} layout="1-column"
                  className="vertical-time-simple vertical-without-time">
                  <VerticalTimelineElement className="vertical-timeline-item dot-danger">
                    <h4 className="timeline-title">All Hands Meeting</h4>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement className="vertical-timeline-item dot-warning">
                    <p>
                      Yet another one, at{" "}
                      <span className="text-success">15:00 PM</span>
                    </p>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement className="vertical-timeline-item dot-success">
                    <h4 className="timeline-title">
                      Build the production release
                      <div className="badge bg-danger ms-2">NEW</div>
                    </h4>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement className="vertical-timeline-item dot-primary">
                    <h4 className="timeline-title">
                      Something not important
                      <div className="avatar-wrapper mt-2 avatar-wrapper-overlap">
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img src={avatar1} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img src={avatar2} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img src={avatar3} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img src={avatar4} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img src={avatar5} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img src={avatar6} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img src={avatar7} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm">
                          <div className="avatar-icon">
                            <img src={avatar8} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper avatar-icon-sm avatar-icon-add">
                          <div className="avatar-icon">
                            <i>+</i>
                          </div>
                        </div>
                      </div>
                    </h4>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement className="vertical-timeline-item dot-info">
                    <h4 className="timeline-title">
                      This dot has an info state
                    </h4>
                  </VerticalTimelineElement>
                  <VerticalTimelineElement className="vertical-timeline-item dot-dark">
                    <h4 className="timeline-title">
                      This dot has a dark state
                    </h4>
                  </VerticalTimelineElement>
                </VerticalTimeline>
              </div>
            </div>
          </PerfectScrollbar>
        </div>
      </Fragment>
    );
  }
}

export default TimelineEx;
