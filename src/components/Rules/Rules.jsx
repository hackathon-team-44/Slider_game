import { useState } from "react";
import style from "./Rules.module.css";
import { Button, Modal } from 'antd';

export default function Rules() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type='primary' onClick={showModal}>Открыть правила</Button>
      <Modal title="Правила игры" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Нужно собрать «кусочки», в одно целое изображение.</p>
        <p>Пустующее окошко лишь одно.</p>
        <p>Кусочки придется передвигать раз за разом, сдвигая картинки в нужном
            направлении</p>
      </Modal>
    </>
  );
}
