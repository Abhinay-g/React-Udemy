import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  let [enteredPlayerName, setEnteredPlayerName] = useState("");
let playerNameontrol = useRef();

  const handleSetName = () => {
    setEnteredPlayerName(playerNameontrol.current.value)
    playerNameontrol.current.value=""
  };
  return (
    <section id="player">
      <h2>
       Welcome {enteredPlayerName ?? "Uncknow Entity"}
      </h2>
      <p>
        <input
          type="text"
          ref={playerNameontrol}
        />
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
