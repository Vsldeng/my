import React, { Component } from "react";
import "./header.less";
import { QqOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Avatar, Popover } from "antd";

export default class Header extends Component {
  render() {
    return (
      <div className="M-header">
        <QqOutlined />
        <span className="header-title">Cheat Room</span>
        <Button ghost onClick={this.props.logOut} size="small">
          退出
        </Button>
        <Popover content={content} title="主页">
          <span className="popo-card">
            <span className="user-name">用户名</span>
            <Avatar shape="square" icon={<UserOutlined />} />
          </span>
        </Popover>
      </div>
    );
  }
}
const content = <div>个性简介：</div>;
