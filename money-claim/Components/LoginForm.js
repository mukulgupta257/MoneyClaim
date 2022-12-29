import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

export default function LoginForm({ formlabels, onSubmit, onFailed }) {
  const onFinish = (values) => {
    console.log("Success:", values);
    onSubmit();
  };
  const onFinishFailed = (errorInfo) => {
    onFailed();
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
      className="LoginForm"
    >
      <Form.Item
        label={formlabels.email}
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
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
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
