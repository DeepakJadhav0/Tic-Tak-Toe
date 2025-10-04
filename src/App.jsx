import { useState } from "react";
import GameBoard from "./component/GameBoard";
import Player from "./component/player";

export default function App() {
  const[activePlayer , setactivePlayer ] = useState("X")

  function handleSelectSquare(){
    setactivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X")
  }

  return (
    <main>
      <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isactive={activePlayer === "X"}/>
        <Player name="Player 2" symbol="O" isactive={activePlayer === "O"}/>
      </ol>
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer}/>
      </div>

    LOG
    </main>
  )
}

