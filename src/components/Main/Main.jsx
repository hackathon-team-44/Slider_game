import style from "./Main.module.css"
import PuzzleBoard from '../puzzle-board/puzzle-board'

export default function Main () {
  return (
    <section className={style.main}>
      <div className={style.photo}></div>
      <PuzzleBoard></PuzzleBoard>
    </section>
  )
}