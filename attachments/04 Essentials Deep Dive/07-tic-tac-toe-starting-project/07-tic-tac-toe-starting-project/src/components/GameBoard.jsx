import { useState } from "react";

export default function GameBoard({onSelectSquare, board}) {

  // const [gameBoard, setGameBoard] = useState(intialGameState);
  // function handleSelectSquare(rowIndex,colIndex){
  //   setGameBoard((previousState)=>{
  //     const updatedBoard = [...previousState.map(itemArray=>[...itemArray])]
  //     updatedBoard[rowIndex][colIndex]=activePlayer
  //     return updatedBoard
  //   })
  //   onSelectPlayer()
  // }
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={()=>onSelectSquare(rowIndex,colIndex)} disabled={playerSymbol!=null}>{playerSymbol} </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
