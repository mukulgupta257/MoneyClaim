import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import Cookies from "js-cookie";
import MsgModal from "./MsgModal";

export default function RegisterFrom({ formlabels }) {
  const [sucess, setSucess] = useState(false);
  const onFinish = async (values) => {
    Cookies.set("userData", JSON.stringify(values));
    const response = await fetch("/api/register");
    const data = Cookies.get("userData");
    console.log("Success:", await response.json());
    setSucess(true);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
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
          label={formlabels.name}
          name="name"
          rules={[
            {
              required: true,
              message: "Please Enter your Name!",
            },
          ]}
          className="LoginFieldFormItem"
        >
          <Input />
        </Form.Item>
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
          label={formlabels.Phonenumber}
          name="contactnumber"
          rules={[
            {
              required: true,
              message: "Please Enter your Contact Number!",
            },
          ]}
          className="LoginFieldFormItem"
        >
          <Input />
        </Form.Item>
        <Form.Item
          colon={false}
          label={formlabels.refferalCode}
          name="refferCode"
          rules={[
            {
              required: false,
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
        <Form.Item
          colon={false}
          label={formlabels.confirmPassword}
          name="confirmpassword"
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
            Sign up
          </Button>
        </Form.Item>
      </Form>
      <MsgModal
        open={sucess}
        setOpen={setSucess}
        content={"Account Created press ok to Login."}
      />
    </>
  );
}
