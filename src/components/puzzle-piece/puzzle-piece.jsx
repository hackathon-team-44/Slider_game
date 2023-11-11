import pieceStyles from './puzzle-piece.module.css';
import backgroundImage from '../../assets/photo.jpg';

const PuzzlePiece = ({ value, imageSize, gridSize, movableDirections, onMove }) => {
  const size = imageSize / gridSize;
  const x = (value - 1) % gridSize;
  const y = Math.floor((value - 1) / gridSize);

  const backgroundPosX = -(x * size + x * 5);
  const backgroundPosY = -(y * size + y * 5);

  const style = {
    width: size,
    height: size,
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: `${backgroundPosX}px ${backgroundPosY}px`,
    backgroundSize: `${imageSize + (gridSize - 1) * 5}px ${imageSize + (gridSize - 1) * 5}px`
  };

  return (
    <div className={pieceStyles.puzzlePiece} style={style}>
      {movableDirections.includes('up') && <div className={`${pieceStyles.arrow} ${pieceStyles.arrowUp}`} onClick={() => onMove('up')} />}
      {movableDirections.includes('down') && <div className={`${pieceStyles.arrow} ${pieceStyles.arrowDown}`} onClick={() => onMove('down')} />}
      {movableDirections.includes('left') && <div className={`${pieceStyles.arrow} ${pieceStyles.arrowLeft}`} onClick={() => onMove('left')} />}
      {movableDirections.includes('right') && <div className={`${pieceStyles.arrow} ${pieceStyles.arrowRight}`} onClick={() => onMove('right')} />}
    </div>
  );
}

export default PuzzlePiece;
