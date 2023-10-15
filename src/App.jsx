import { useContext } from "react";
import Board from "./components/Board";
import PlayerProfile from "./components/PlayerProfile";
import { GameContext } from "./contexts/GameContextProvider";

function App() {
  const { score } = useContext(GameContext);

  return (
    <div id="app">
      <div className="content-container">
        <PlayerProfile player="X" score={score.xPlayer} />
        <Board />
        <PlayerProfile player="O" score={score.oPlayer} />
      </div>
    </div>
  );
}

export default App;
