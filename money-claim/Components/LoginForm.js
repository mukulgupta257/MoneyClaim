import React from "react";
import { Button, Form, Input } from "antd";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

export default function LoginForm({ formlabels }) {
  const router = useRouter();
  const onFinish = async (values) => {
    Cookies.set("userData", JSON.stringify(values));
    const response = await fetch("/api/hello");
    Cookies.remove("userData");
    console.log("Success:", Cookies.get("UserInfo"));
    if (response.status == 200) {
      router.push("/home");
    }
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
