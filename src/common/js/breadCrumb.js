import React, { Component } from "react";
import { Breadcrumb } from "antd";

export default class BreadCrumb extends Component {
  List = this.props.data.map((item) => {
    return <Breadcrumb.Item key={item.key}>{item.value}</Breadcrumb.Item>;
  });
  render() {
    return (
      <>
        <Breadcrumb>{this.List}</Breadcrumb>
      </>
    );
  }
}
