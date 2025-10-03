const initializgame = [
    [null , null , null],
    [null , null , null],
    [null , null , null],
];

export default function GameBoard() {
  return (
    <ol id="game-board">
        {initializgame.map((row , rowindex)=> (
            <li key={rowindex}> 
                <ol>
                    {row.map((playersymbol , colindex)=> (
                        <li key={colindex}>
                            <button>{playersymbol}</button>
                        </li>
                    ))}
                </ol>
            </li>
        ))}
    </ol>
  )
}
