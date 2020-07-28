import React, { Component } from "react";
import "./header.less";
import User from "./user";
import { MenuOutlined } from "@ant-design/icons";

export default class Header extends Component {
  render() {
    return (
      <div className="M-header">
        <MenuOutlined
          className="isCollpase"
          onClick={this.props.handleCollapse}
        />
        <User logOut={this.props.logOut}></User>
      </div>
    );
  }
}
