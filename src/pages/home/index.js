import React, { Component } from "react";
import "./home.less";
import Header from "../../components/header";
import routerDefine from "../../common/js/routerDefine";
import Home from "./home";

export default class HomeCom extends Component {
  componentDidMount() {
    routerDefine(this.props);
  }
  handleLogout = () => {
    window.sessionStorage.clear();
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className="P-home">
        <Header logOut={this.handleLogout}></Header>
        <Home></Home>
      </div>
    );
  }
}
