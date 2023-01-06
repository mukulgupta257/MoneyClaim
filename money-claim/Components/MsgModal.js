import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Modal } from "antd";

export default function MsgModal({ open, setOpen, content }) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
    router.push("/");
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Okay
          </Button>,
        ]}
      >
        <p>{content}</p>
      </Modal>
    </>
  );
}
