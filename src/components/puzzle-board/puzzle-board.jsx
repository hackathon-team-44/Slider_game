import { useState, useEffect } from 'react';
import PuzzlePiece from '../puzzle-piece/puzzle-piece';
import boardStyles from './puzzle-board.module.css';
import { Button, Modal } from 'antd';
import Rules from '../Rules/Rules';

const PuzzleBoard = () => {
  const [tiles, setTiles] = useState([]);

  const imageSize = 574;
  const gridSize = 4;

  useEffect(() => {
    setTiles(generateRandomBoard());
  }, []);

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

  const generateRandomBoard = () => {
    let tempTiles;

    do {
      tempTiles = [...Array(15).keys()].sort(() => Math.random() - 0.5);
      tempTiles.push(null);
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

  const getRowCol = (index, gridSize) => {
    return {
      row: Math.floor(index / gridSize),
      col: index % gridSize,
    };
  };

  const getMovableDirections = (tileIndex) => {
    const emptyIndex = tiles.indexOf(null);

    const { row: tileRow, col: tileCol } = getRowCol(tileIndex, gridSize);
    const { row: emptyRow, col: emptyCol } = getRowCol(emptyIndex, gridSize);

    let directions = [];

    if (tileRow === emptyRow) {
      if (tileCol - 1 === emptyCol) directions.push('right');
      if (tileCol + 1 === emptyCol) directions.push('left');
    }

    if (tileCol === emptyCol) {
      if (tileRow - 1 === emptyRow) directions.push('down');
      if (tileRow + 1 === emptyRow) directions.push('up');
    }

    return directions;
  };

  const isGameWon = (tiles) => {
    for (let i = 0; i < tiles.length - 1; i++) {
      if (tiles[i] !== i + 1) {
        return false;
      }
    }
    return true;
  };

  const setWinningState = () => {
    const winningTiles = Array.from({ length: gridSize * gridSize - 1 }, (_, i) => i + 1);
    winningTiles.push(null);
    setTiles(winningTiles);
  };

  const moveTile = (tileIndex, direction) => {
    const emptyIndex = tiles.indexOf(null);

    const { row: tileRow, col: tileCol } = getRowCol(tileIndex, gridSize);
    const { row: emptyRow, col: emptyCol } = getRowCol(emptyIndex, gridSize);

    let targetIndex = -1;

    switch (direction) {
      case 'up':
        if (tileRow + 1 === emptyRow && tileCol === emptyCol) {
          targetIndex = emptyIndex;
        }
        break;
      case 'down':
        if (tileRow - 1 === emptyRow && tileCol === emptyCol) {
          targetIndex = emptyIndex;
        }
        break;
      case 'left':
        if (tileRow === emptyRow && tileCol + 1 === emptyCol) {
          targetIndex = emptyIndex;
        }
        break;
      case 'right':
        if (tileRow === emptyRow && tileCol - 1 === emptyCol) {
          targetIndex = emptyIndex;
        }
        break;
      default:
        break;
    }

    if (targetIndex !== -1) {
      const newTiles = [...tiles];
      [newTiles[targetIndex], newTiles[tileIndex]] = [newTiles[tileIndex], newTiles[targetIndex]];

      setTiles(newTiles);

      if (isGameWon(newTiles)) {
        showModal();
      }
    }
  };

  return (
    <>
      <div className={boardStyles.container}>
        <div className={boardStyles.puzzleBoard}>
          {tiles.map((tile, index) => (
            tile !== null ?
              <PuzzlePiece key={index} value={tile} imageSize={imageSize} gridSize={gridSize}
                movableDirections={getMovableDirections(index)}
                onMove={(direction) => moveTile(index, direction)} /> :
              <div key={index} className={`${boardStyles.puzzlePiece} ${boardStyles.empty}`}></div>
          ))}
        </div>
        <div className={boardStyles.btns}>
          <Button className={boardStyles.btn} onClick={setWinningState}>Показать решение</Button>
          <Button className={boardStyles.btn} onClick={() => setTiles(generateRandomBoard())}>Начать заново</Button>
          <div className={boardStyles.rules}><Rules></Rules></div>
        </div>
      </div>
      <Modal title="Успех!" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <p>Вы выиграли!</p>
      </Modal>
    </>
  );
};

export default PuzzleBoard;
