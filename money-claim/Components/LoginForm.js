import React from "react";
import { Button, Form, Input } from "antd";
import Cookies from "js-cookie";

export default function LoginForm({ formlabels }) {
  const onFinish = (values) => {
    Cookies.set("userData", JSON.stringify(values));
    const data = Cookies.get("userData");
    console.log("Success:", JSON.parse(data));
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      className="LoginFieldForm"
    >
      <Form.Item
        colon={false}
        label={formlabels.email}
        name="username"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please Enter your Email!",
          },
        ]}
        className="LoginFieldFormItem"
      >
        <Input />
      </Form.Item>

      <Form.Item
        colon={false}
        label={formlabels.password}
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
        className="LoginFieldFormItem"
      >
        <Input.Password />
      </Form.Item>

      <Form.Item className="LoginFieldFormItem">
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
}
