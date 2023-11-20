import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver"
import { useState } from "react";
const intialGameState = Array(3)
  .fill(null)
  .map((el) => Array(3).fill(null));
const PLAYERS = {
  X:"Abhinay",
  O:"Rahul"
}
function deriveActivePlayer(turns) {
  let currentPlayer = "X";
  if (!!turns.length && turns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}
function deriveGameBoard(gameTurn){
  const gameBoard = [...intialGameState.map(array=>[...array])];

  for (let turn of gameTurn) {
    gameBoard[turn.square.row][turn.square.col] = turn.player;
  }
  return gameBoard
}
function deriveWinner(gameBoard ){
  let winner = null;
  for (let combo of WINNING_COMBINATIONS) {
    let firstSquareSymbol = gameBoard[combo[0].row][combo[0].column];
    let secondSquareSymbol = gameBoard[combo[1].row][combo[1].column];
    let thirdSquareSymbol = gameBoard[combo[2].row][combo[2].column];
    
    if (
      !!firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol
      ) {
        winner = firstSquareSymbol;
      }
    }
    return winner 

}
function App() {
  const [gameTurn, setGameTurn] = useState([]);
  const [playerNames, setPlayerNames] = useState(PLAYERS);
  let activePlayer = deriveActivePlayer(gameTurn);
  let winner = null;
  const gameBoard = deriveGameBoard(gameTurn)
  winner = deriveWinner(gameBoard)
 
    let isDraw = gameTurn.length==9 && winner==null
  function handleSelectSquare(rowIndex, colIndex) {
    console.log(rowIndex, colIndex);
    setGameTurn((prevturn) => {
      let currentPlayer = deriveActivePlayer(prevturn);

      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevturn,
      ];
      return updatedTurn;
    });
  }
  function handlePlayerNameChange(symbol,pname){
    setPlayerNames((playerNames)=>{
      return {
        ...playerNames,
        [symbol]:pname
      }
    })
  }
  function handleRematch(){
    setGameTurn([])
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            isActive={activePlayer === "X"}
            initialName={PLAYERS.X}
            symbol="X"
            handlePlayerNameChange={handlePlayerNameChange}
          ></Player>
          <Player
            isActive={activePlayer === "O"}
            initialName={PLAYERS.O}
            symbol="O"
            handlePlayerNameChange={handlePlayerNameChange}

          ></Player>
        </ol>
        { (!!winner || isDraw) && <GameOver handleRematch={handleRematch} winner={playerNames[winner]}/>}
        
        <GameBoard
          board={gameBoard}
          onSelectSquare={handleSelectSquare}
        ></GameBoard>
      </div>
      <Log turns={gameTurn}></Log>
    </main>
  );
}

export default App;
