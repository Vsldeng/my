import { Drawer, Button, Input, Divider } from "antd";
import React, { Component } from "react";

export default class InHallDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    console.log(this.props);
  }
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div className="site-drawer-render-in-current-wrapper">
        {this.props.info.title1}
        <div style={{ marginTop: 16 }}>
          <Button onClick={this.showDrawer}>{this.props.info.btn1}</Button>
        </div>
        <Drawer
          title={this.props.info.title2}
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
          getContainer={false}
          style={{ position: "absolute" }}
        >
          <p>
            <Input placeholder={this.props.info.placeholder}></Input>
            <Divider></Divider>
            <Button type="primary">{this.props.info.btn2}</Button>
          </p>
        </Drawer>
      </div>
    );
  }
}
