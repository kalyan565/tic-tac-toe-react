import { useState } from "react";

export default function Player({initialName,symbol, isActive, onChangeName}) {
  const [playerName, setplayerName] = useState(initialName);
   const [isEditing, setIsEditing] = useState(false);

   function handleEditClick() {
    setIsEditing((editing) => !isEditing);

    if(isEditing) {
    onChangeName(symbol, playerName);
    }
   }

   function handleChange(event) { // the onChange prop will also return a value of the data that we entered
    setplayerName(event.target.value); 
   }

   let player_name = <span className="player-name">{playerName}</span>;
   
   if(isEditing) {
    player_name = <input type="text" required value={playerName} onChange={handleChange}/> // here the onChange wil send a value ot the handle change fuction
    
   }
    return (
    
          <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {player_name}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>

    );
}