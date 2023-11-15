import React, { Fragment } from "react";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import ListBoxes from "./Examples/ListBoxes";
import ProfileBlocks from "./Examples/ProfileBlocks";

export default class WidgetsProfileBoxes extends React.Component {
  render() {
    return (
      <Fragment>
        <PageTitle heading="Profile Boxes"
          subheading="These boxes are usually for dashboard elements centered around users and profiles."
          icon="pe-7s-science icon-gradient bg-happy-itmeo"/>
        <ListBoxes />
        <ProfileBlocks />
      </Fragment>
    );
  }
}
