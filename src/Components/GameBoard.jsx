import { useState } from "react"



 export default function GameBoard({onSelectPlayer, board}) {

   
    return (
        <ol id="game-board">

              {board.map((row, rowIndex) => (
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerCol, colIndex) => (
                            <li key={colIndex}>
                                <button onClick={() => onSelectPlayer(rowIndex, colIndex)} disabled={playerCol !== null}>{playerCol}</button>
                            </li>
                        ))}
                    </ol>
                </li>
              ))}

        </ol>
    )
    
 }