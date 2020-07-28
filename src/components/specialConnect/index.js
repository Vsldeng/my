import React, { Component } from "react";
import BreadCrumb from "../../common/js/breadCrumb";

export default class SpecialConnect extends Component {
  render() {
    return (
      <div>
        <BreadCrumb
          data={[
            { key: 0, value: "主页" },
            { key: 5, value: "特别关心" },
          ]}
        ></BreadCrumb>
      </div>
    );
  }
}
