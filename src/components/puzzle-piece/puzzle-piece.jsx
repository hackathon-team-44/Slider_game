import pieceStyles from './puzzle-piece.module.css';
import backgroundImage from '../../assets/photo.jpg';

const PuzzlePiece = ({ value, imageSize, gridSize }) => {
  const size = imageSize / gridSize;
  const x = value % gridSize;
  const y = Math.floor(value / gridSize);
  const style = {
    width: size,
    height: size,
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: `-${x * size}px -${y * size}px`,
    backgroundSize: `${imageSize}px ${imageSize}px`
  };

  return <div className={pieceStyles.puzzlePiece} style={style}></div>;
};

export default PuzzlePiece;