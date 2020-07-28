import React, { Component } from "react";
import BreadCrumb from "../../common/js/breadCrumb";

export default class BlackList extends Component {
  render() {
    return (
      <div>
        <BreadCrumb
          data={[
            { key: 0, value: "主页" },
            { key: 6, value: "聊一圈" },
          ]}
        ></BreadCrumb>
      </div>
    );
  }
}
