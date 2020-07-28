import React, { Component } from "react";
import BreadCrumb from "../../common/js/breadCrumb";

export default class CheatList extends Component {
  render() {
    return (
      <div>
        <BreadCrumb
          data={[
            { key: 0, value: "主页" },
            { key: 4, value: "聊友列表" },
          ]}
        ></BreadCrumb>
      </div>
    );
  }
}
