import React, { Component } from "react";
import "./login.less";

export default class Login extends Component {
  gotoHome = () => {
    this.props.history.push("/home");
  };
  render() {
    return (
      <div className="P-login">
        <h1>Login page</h1>
        <button onClick={this.gotoHome}>跳转Home页面</button>
      </div>
    );
  }
}
