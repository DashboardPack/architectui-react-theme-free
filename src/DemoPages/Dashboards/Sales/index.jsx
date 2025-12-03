import React, { Component, Fragment } from "react";
import Tabs from "react-responsive-tabs";

import PageTitle from "../../../Layout/AppMain/PageTitle";

// Examples
import SalesDashboard1 from "./Examples/Variation1";

const tabsContent = [
  {
    title: "Sales Report",
    content: <SalesDashboard1 />,
  },
  {
    title: "Account Activity",
    content: <SalesDashboard1 />,
  },
  {
    title: "Profile Status",
    content: <SalesDashboard1 />,
  },
  {
    title: "New Accounts",
    content: <SalesDashboard1 />,
  },
];

function getTabs() {
  return tabsContent.map((tab, index) => ({
    title: tab.title,
    getContent: () => tab.content,
    key: index,
  }));
}

export default class SalesDashboard extends Component {
  render() {
    return (
      <Fragment>
        <div className="app-inner-layout">
          <div className="app-inner-layout__header-boxed p-0">
            <div className="app-inner-layout__header page-title-icon-rounded text-white bg-premium-dark mb-4">
              <PageTitle heading="Sales Dashboard"
                subheading="Example of a Dashboard page built with ArchitectUI."
                icon="pe-7s-umbrella icon-gradient bg-sunny-morning"/>
            </div>
          </div>
          <Tabs tabsWrapperClass="body-tabs body-tabs-layout body-tabs-big" transform={false}
            showInkBar={true} items={getTabs()}/>
        </div>
      </Fragment>
    );
  }
}
