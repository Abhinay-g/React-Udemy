import { useState } from "react";

export default function Player({ initialName, symbol, isActive,handlePlayerNameChange }) {
    const [playerName, setPlayerName] = useState(initialName)
  let [isEditing, setIsEditing] = useState(false);
  function handleEditClick() {
    setIsEditing((editing)=>!editing);
    handlePlayerNameChange(symbol,playerName)

  }
  let personName = <span className="player-name">{playerName}</span>;
  function handleChange(event){
    setPlayerName(event.target.value)
  }
  if (isEditing) {
    personName = <input type="text" required value={playerName} onChange={handleChange}></input>;
  }
  return (
    <li className={isActive ? "active":""}>
      <span className="player">
        {personName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{!isEditing? "Edit": "Save"}</button>
    </li>
  );
}
