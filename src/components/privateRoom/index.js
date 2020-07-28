import React, { Component } from "react";
import BreadCrumb from "../../common/js/breadCrumb";

export default class PrivateRoom extends Component {
  render() {
    return (
      <div>
        <BreadCrumb
          data={[
            { key: 0, value: "主页" },
            { key: 2, value: "个人房间" },
          ]}
        ></BreadCrumb>
      </div>
    );
  }
}
