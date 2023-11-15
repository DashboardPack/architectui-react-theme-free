import React, { Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import SweetAlerts from "./Examples/SweetAlerts";
import ToastifyAlerts from "./Examples/ToastifyAlerts";
import BasicAlerts from "./Examples/BasicAlerts";

export default class NotificationsExamples extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Notifications"
          subheading="Notifications represent one of the best ways to give feedback for various users actions."
          icon="pe-7s-glasses icon-gradient bg-love-kiss"/>
        <div className="mbg-3 h-auto ps-0 pe-0 bg-transparent no-border card-header">
          <div className="card-header-title fsize-2 text-capitalize fw-normal">
            Sweet Alerts
          </div>
        </div>
        <SweetAlerts />
        <div className="mbg-3 h-auto ps-0 pe-0 bg-transparent no-border card-header">
          <div className="card-header-title fsize-2 text-capitalize fw-normal">
            Toastify
          </div>
        </div>
        <ToastifyAlerts />
        <div className="mbg-3 h-auto ps-0 pe-0 bg-transparent no-border card-header">
          <div className="card-header-title fsize-2 text-capitalize fw-normal">
            Basic Bootstrap 5 Alerts
          </div>
        </div>
        <BasicAlerts />
      </Fragment>
    );
  }
}
