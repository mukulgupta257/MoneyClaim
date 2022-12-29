import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

export default function LoginForm({ formlabels, onSubmit, onFailed }) {
  const onFinish = (values) => {
    console.log("Success:", values);
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
