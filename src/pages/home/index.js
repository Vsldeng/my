import React, { Component } from "react";
import "./home.less";
import Header from "../../components/header";

export default class Home extends Component {
  render() {
    return (
      <div className="P-home">
        <Header></Header>
        <h1>Home page</h1>
      </div>
    );
  }
}
