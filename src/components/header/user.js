import React, { Component } from "react";
import { Menu, Dropdown } from "antd";
import { DownOutlined, CloseCircleOutlined } from "@ant-design/icons";

export default class User extends Component {
  menu = (
    <Menu>
      <Menu.Item key="0" onClick={this.props.logOut}>
        <span>
          <CloseCircleOutlined />
          退出登录
        </span>
      </Menu.Item>
    </Menu>
  );

  render() {
    return (
      <Dropdown overlay={this.menu} trigger={["click"]} className="popo-card">
        <a onClick={(e) => e.preventDefault()}>
          Hello User <DownOutlined />
        </a>
      </Dropdown>
    );
  }
}
