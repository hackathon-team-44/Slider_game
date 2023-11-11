import { useState } from "react";
import style from "./EndOfGame.module.css";

export default function EndOfGame() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function handlePopupOpen() {
    setIsPopupOpen(true);
  }

  function handleClosePopup() {
    setIsPopupOpen(false);
  }

  return (
    <>
      <button id={style.endGameButton} onClick={handlePopupOpen}>Завершить игру</button>
      <div className={isPopupOpen ? style.endGamePopup_opened : style.endGamePopup} >
        <div className={style.popup_content}>
          <h2>Игра завершена</h2>
          <p>Спасибо за участие!</p>
          <button id={style.closeEndGamePopupButton} onClick={handleClosePopup}>
            Закрыть
          </button>
        </div>
      </div>
    </>
  );
}
