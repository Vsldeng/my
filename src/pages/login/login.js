import React, { Component } from "react";
import { Form, Input, Button, message } from "antd";
import "./login.less";

export default class Login extends Component {
  onFinish = (values) => {};
  onFinishFailed = (errorInfo) => {
    message.error("输入错误");
  };
  render() {
    return (
      <div className="loginCard">
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} className="buttons">
            <Button type="primary" htmlType="submit">
              登录
            </Button>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
const layout = {
  labelCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
