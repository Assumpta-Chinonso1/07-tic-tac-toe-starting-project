import { useState } from 'react'
import PlayerInfo from './Components/PlayerInfo'
  import GameBoard from './Components/GameBoard'
  import Log from './Components/Log'
  import GameOver from './Components/GameOver'
  import { WINNING_COMBINATION } from './Winning Combinations'

  const PLAYERS = {
    X: 'player 1',
    O: 'player 2'
  }

  const INITIAL_GAME_BOARD = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]


 function deriveActivePlayer(gameTurns) {

  let currentplayer = 'X'

  if ( gameTurns.length > 0 && gameTurns [0].player === 'X') {
    currentplayer = '0'
    
  }
  return currentplayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(array => [...array])]

    for (const turn of gameTurns) {
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player
        
    }
      return gameBoard;
}

function deriveWinner(gameBoard,players) {
  let winner;

  for(const combination of WINNING_COMBINATION){
   const firstSquareSymbol = gameBoard [combination[0].row][combination[0].col]
   const secondSquareSymbol = gameBoard [combination[1].row][combination[1].col] 
   const thirdSquareSymbol = gameBoard [combination[2].row][combination[2].col]

     if (firstSquareSymbol &&
       firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol) 
        {
        winner = players[firstSquareSymbol];
     }

  }

  return winner;
  
}
 
function App () {
 
  const [players, setPlayers] = useState (PLAYERS)

  const [gameTurns, setGameTurns] = useState([])

 

        const activePlayer = deriveActivePlayer(gameTurns)
        const gameBoard = deriveGameBoard(gameTurns)
        const winner = deriveWinner(gameBoard, players) 
        const hasDraw = gameTurns.length === 9 && !winner

       function handleClickEdit(rowIndex, colIndex) {
       

        setGameTurns((prevTurns) => {

          const currentplayer = deriveActivePlayer(prevTurns)

          const updatedTurns = [{square: {   row: rowIndex, col: colIndex}, player:currentplayer }, ...prevTurns,

          ];

          return updatedTurns

        })
        
       }

       function handleRematch() {
        setGameTurns([])
        
       }

       function handlePlayersChangeName(symbol, newName) {
        setPlayers(prevPlayers => {
          return {
            ...prevPlayers,
            [symbol]: newName
          }
        })
       }

  return (
    <main>
         <div id="game-container"> 
          <ol id="players" className="highlight-player"> 
           <PlayerInfo initiaName={PLAYERS.X} symbol="X" isActive={activePlayer === 'X'} onChangeName={handlePlayersChangeName}/>
           <PlayerInfo initiaName={PLAYERS.O}  symbol="0" isActive={activePlayer === '0'} onChangeName={handlePlayersChangeName}/>

          </ol>
        {(winner || hasDraw) && <GameOver winner= {winner} onRematch={handleRematch} /> }
          <GameBoard onSelectPlayer={handleClickEdit} board ={gameBoard}/>
         </div>
        
       <Log turns={gameTurns}/>
    </main>
  )
}

export default App