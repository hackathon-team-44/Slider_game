import { Link } from 'react-router-dom';
import style from './Footer.module.css';

export default function Footer() {
  return (
    <div className={style.footer}>
      <Link to="https://sirota.ru/" target="_blank" className={style.link}>Создан при содействии НКО &acute;Найди семью&acute;</Link>
      <li className={style.list}>
        <Link to='https://github.com/hackathon-team-44/Slider_game' target="_blank" className={style.item}>GitHub проекта</Link>
        <Link to='https://github.com/orgs/hackathon-team-44/people' target="_blank" className={style.item}>Создатели</Link>
      </li>
    </div>
  );
}