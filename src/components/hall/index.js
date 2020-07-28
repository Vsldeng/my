import React, { Component } from "react";
import routerDefine from "../../common/js/routerDefine";
import BreadCrumb from "../../common/js/breadCrumb";
import InHallDrawer from "../../common/js/inHallDrawer";
import OutHallDrawer from "../../common/js/outHallDrawer";
import { Divider } from "antd";
import RoomCard from "../../common/js/card";

export default class Hall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inSearchInfo: {
        title1: "寻找聊天房间",
        btn1: "查找",
        title2: "Cheat Together",
        placeholder: "请输入房间号",
        btn2: "搜索",
      },
    };
  }
  componentDidMount() {
    routerDefine(this.props);
  }
  render() {
    return (
      <div>
        <BreadCrumb
          data={[
            { key: 0, value: "主页" },
            { key: 1, value: "大厅" },
          ]}
        ></BreadCrumb>

        <div className="outhall-drawer">
          <OutHallDrawer></OutHallDrawer>
        </div>
        <div className="inhall-drawer">
          <InHallDrawer info={this.state.inSearchInfo}></InHallDrawer>
        </div>
        <div className="room-list">
          <Divider></Divider>
        </div>
        <RoomCard></RoomCard>
        <RoomCard></RoomCard>
        <RoomCard></RoomCard>
        <RoomCard></RoomCard>
      </div>
    );
  }
}
