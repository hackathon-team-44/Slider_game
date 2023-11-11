import { useState } from "react";
import style from "./Rules.module.css";

export default function Rules() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handlePopupOpen() {
    setIsPopupOpen(true);
  }

  function handlePopupClose() {
    setIsPopupOpen(false);
  }

  return (
    <>
      <button id={style.openPopupButton} onClick={handlePopupOpen}>
        Открыть правила
      </button>
      <div className={isPopupOpen ? style.popup_opened : style.popup}>
        <div className={style.popup_content}>
          <h2>Правила игры</h2>
          <p>
            Нужно собрать «кусочки», в одно целое изображение. <br />
            Пустующее окошко лишь одно.
            <br />
            Кусочки придется передвигать раз за разом, сдвигая картинки в нужном
            направлении
          </p>
          <button id={style.closePopupButton} onClick={handlePopupClose}>Закрыть</button>
        </div>
      </div>
    </>
  );
}
