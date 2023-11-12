import style from './Header.module.css';

export default function Header () {
  return (
    <section className={style.header}>
      <h1 className={style.title}>Slider game: Привет, я ваш новый член семьи!</h1>
    </section>
  )
}