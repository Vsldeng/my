import React, { Component } from "react";
import "./home.less";
import Header from "../../components/header";
import routerDefine from "../../common/js/routerDefine";
import Home from "./home";
import { HashRouter, Route, Redirect } from "react-router-dom";
import Hall from "../../components/hall";
import PrivateRoom from "../../components/privateRoom";
import CheatCircle from "../../components/cheatCircle";
import CheatList from "../../components/cheatList";
import SpecialConnect from "../../components/specialConnect";
import BlackList from "../../components/blackList";

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
  handlePageChange = (e) => {
    this.props.history.push(`/home/${e.key}`);
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
        <HashRouter>
          <Route path="/home/1" component={Hall} />
          <Route path="/home/2" component={PrivateRoom} />
          <Route path="/home/3" component={CheatCircle} />
          <Route path="/home/4" component={CheatList} />
          <Route path="/home/5" component={SpecialConnect} />
          <Route path="/home/6" component={BlackList} />
        </HashRouter>
      </div>
    );
  }
}
