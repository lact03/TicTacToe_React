import { useRef, useContext, useEffect } from "react";
import Tile from "./Tile";
import { GameContext } from "../contexts/GameContextProvider";

function Board() {
  const {
    isGameFinish,
    setIsGameFinish,
    winner,
    setWinner,
    setBoard,
    setCurrPlayer,
  } = useContext(GameContext);

  // modal element
  const dialog = useRef();

  // show modal if the game is finish
  useEffect(() => {
    if (isGameFinish) {
      dialog.current.showModal();
    }
  }, [isGameFinish]);

  // reset/restart function
  function handleClick() {
    let emptyBoard = Array(9).fill("");
    setBoard(emptyBoard);
    setCurrPlayer("X");
    setIsGameFinish(false);
    setWinner();
    dialog.current.close();
  }

  return (
    <div className="board-container">
      <dialog ref={dialog} style={{ margin: " auto" }}>
        <div id="win-message">
          {winner ? (
            <h1>
              Winner: {winner === "X" && <i className="fa-solid fa-xmark"></i>}
              {winner === "O" && <i className="fa-regular fa-circle"></i>}!
            </h1>
          ) : (
            <h1>Draw!</h1>
          )}
          <button onClick={handleClick}>Restart</button>
        </div>
      </dialog>
      <div id="board">
        <Tile tileNumber={0} />
        <Tile tileNumber={1} />
        <Tile tileNumber={2} />
        <Tile tileNumber={3} />
        <Tile tileNumber={4} />
        <Tile tileNumber={5} />
        <Tile tileNumber={6} />
        <Tile tileNumber={7} />
        <Tile tileNumber={8} />
      </div>
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default Board;
