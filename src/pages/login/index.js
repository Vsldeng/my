import React, { Component } from "react";
import Login from "./login";
import "./login.less";
import { Card } from "antd";

export default class LoginCom extends Component {
  render() {
    return (
      <Card title="Cheat Room">
        <Login></Login>
      </Card>
    );
  }
}
