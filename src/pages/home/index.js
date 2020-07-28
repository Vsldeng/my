import React, { Component } from "react";
import "./home.less";
import Header from "../../components/header";
import routerDefine from "../../common/js/routerDefine";
import Home from "./home";
import { HashRouter, Route, Redirect } from "react-router-dom";
import { Switch } from "antd";
import Login from "../login/login";

export default class HomeCom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCollapse: false,
    };
  }
  handleCollapse = () => {
    this.setState({
      isCollapse: !this.state.isCollapse,
    });
  };
  componentDidMount() {
    routerDefine(this.props);
  }
  handleLogout = () => {
    window.sessionStorage.clear();
    this.props.history.push("/login");
  };
  handlePageChange = () => {
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className="P-home">
        <Home
          isCollapse={this.state.isCollapse}
          handlePageChange={this.handlePageChange}
        ></Home>
        <Header
          logOut={this.handleLogout}
          handleCollapse={this.handleCollapse}
        ></Header>
      </div>
    );
  }
}
