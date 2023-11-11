import { useState, useEffect } from 'react';
import PuzzlePiece from '../puzzle-piece/puzzle-piece';
import boardStyles from './puzzle-board.module.css';

const PuzzleBoard = () => {
  const [tiles, setTiles] = useState([]);

  useEffect(() => {
    setTiles(generateRandomBoard());
  }, []);

  const generateRandomBoard = () => {
    let tempTiles;
    do {
      tempTiles = [...Array(15).keys()].sort(() => Math.random() - 0.5);
      tempTiles.push(null); // Для пустого места
    } while (!isSolvable(tempTiles));
    return tempTiles;
  };

  const isSolvable = (tempTiles) => {
    let inversions = 0;
    for (let i = 0; i < tempTiles.length - 1; i++) {
      for (let j = i + 1; j < tempTiles.length; j++) {
        if (tempTiles[i] !== null && tempTiles[j] !== null && tempTiles[i] > tempTiles[j]) inversions++;
      }
    }
    return inversions % 2 === 0;
  };

  const imageSize = 657;
  const gridSize = 4;

  return (
    <div className={boardStyles.puzzleBoard}>
      {tiles.map((tile, index) => (
        tile !== null ? <PuzzlePiece key={index} value={tile} imageSize={imageSize} gridSize={gridSize} /> : <div key={index}></div>
      ))}
    </div>
  );
};

export default PuzzleBoard;
