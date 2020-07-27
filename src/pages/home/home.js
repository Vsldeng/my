import React, { Component } from "react";
import { Menu } from "antd";
import { CommentOutlined, GlobalOutlined } from "@ant-design/icons";

const { SubMenu } = Menu;

export default class Home extends Component {
  render() {
    return (
      <div className="home-List">
        <Menu
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={["sub2", "sub4"]}
          mode="inline"
        >
          <SubMenu key="sub2" icon={<CommentOutlined />} title="聊天室">
            <Menu.Item key="4">创建房间</Menu.Item>
            <Menu.Item key="5">大厅</Menu.Item>
            <Menu.Item key="6">个人房间</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <GlobalOutlined />
                <span>社交</span>
              </span>
            }
          >
            <Menu.Item key="9">聊一圈</Menu.Item>
            <Menu.Item key="10">聊友列表</Menu.Item>
            <Menu.Item key="11">特别关心</Menu.Item>
            <Menu.Item key="12">黑名单</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}
