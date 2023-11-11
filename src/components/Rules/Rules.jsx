// import { useState } from "react";
import style from "./Rooles.modules.css";

export default function Rules() {
  // const [isPopupOpen, setIsPopupOpen] = useState('none');
  return (
    <>
      <button id={style.openPopupButton}>Открыть правила</button>
      <div className={style.popup}>
        <div className={style.popup_content}>
          <h2>Правила игры</h2>
          <p>
            Нужно собрать «кусочки», в одно целое изображение. <br />
            Пустующее окошко лишь одно.
            <br />
            Кусочки придется передвигать раз за разом, сдвигая картинки в нужном
            направлении
          </p>
          <button id={style.closePopupButton}>Закрыть</button>
        </div>
      </div>
    </>
  );
}
