import React, { Component } from "react";
import { Menu } from "antd";
import { CommentOutlined, GlobalOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export default class Home extends Component {
  render() {
    return (
      <div className="home-List">
        <Menu
          onClick={(this.handleClick, this.props.handlePageChange)}
          style={{
            width: this.props.isCollapse ? "0px" : "264px",
          }}
          defaultOpenKeys={["sub1", "sub2"]}
          defaultSelectedKeys={["1"]}
          mode="inline"
        >
          <SubMenu
            key="sub1"
            icon={<CommentOutlined />}
            title="聊天室"
            style={{ display: this.props.isCollapse ? "none" : "block" }}
          >
            <Menu.Item key="1">大厅</Menu.Item>
            <Menu.Item key="2">个人房间</Menu.Item>
          </SubMenu>
          <SubMenu
            style={{ display: this.props.isCollapse ? "none" : "block" }}
            key="sub2"
            icon={<GlobalOutlined />}
            title="社交"
          >
            <Menu.Item key="3">聊一圈</Menu.Item>
            <Menu.Item key="4">聊友列表</Menu.Item>
            <Menu.Item key="5">特别关心</Menu.Item>
            <Menu.Item key="6">黑名单</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
