import { useState } from "react"



 export default function GameBoard({onSelectPlayer, board}) {

    //const [gameBoard, setGameBoard] = useState(initialGameBoard)

    //function handleClickEdit(rowIndex, colIndex) {
      //  setGameBoard((previousGame) => {

         //   const updatedGame = [...previousGame.map((innerArray) =>[...innerArray])]
           // updatedGame[rowIndex][colIndex] = activePlayerSymbol;
           // return updatedGame
       // })
        
      // onSelectPlayer ()

    //}

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