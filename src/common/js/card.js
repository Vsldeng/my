import React, { Component } from "react";
import { Card } from "antd";
import "../images/bg.png";

export default class RoomCard extends Component {
  render() {
    return (
      <div className="site-card-border-less-wrapper one-room">
        <Card
          title="老八吃汉堡"
          bordered={false}
          style={{ width: 400, height: 700 }}
        >
          <p>简简单单的午饭</p>
          <p>就吃老八蜜汁小憨包</p>
          <p>既实惠，还管饱</p>
          <div>
            <img src="../images/bg.png" />
          </div>
        </Card>
      </div>
    );
  }
}
