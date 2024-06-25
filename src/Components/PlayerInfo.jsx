 import { useState } from "react"

 export default function PlayerInfo({initiaName, symbol, isActive, onChangeName}) {

  const [PlayerName, setIsEditName] = useState(initiaName)

  const [isEditng, setisEditing] = useState(false)

  function handleClickBtn() {
    setisEditing((editing) => !editing)
    
    if (isEditng) {
    onChangeName(symbol, PlayerName)
    }
    
  }
         function handleEdit(event) {
          setIsEditName(event.target.value)
          
         }

     let editibleName = <span className="player-name">{PlayerName}</span>

     if (isEditng) {
      editibleName = <input type="text" required value={PlayerName} onChange={handleEdit} />
      
     }
  return (
           <li className={isActive ? 'active' : undefined}>
            <span className="player">  
              {editibleName}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClickBtn}>{isEditng ? 'Save' : 'Edit'}</button>
           </li>
  )
  
 }