import { useContext, useEffect } from "react";
import { GameContext } from "../contexts/GameContextProvider";

function Tile({ tileNumber }) {
  const { board, setBoard, currPlayer, setCurrPlayer, score } =
    useContext(GameContext);

  // check if the board empty before putting a symbol
  function handleClick(e) {
    const newArray = [...board];
    if (board[tileNumber] === "") {
      newArray[tileNumber] = currPlayer;
      setBoard(newArray);
      // change player
      setCurrPlayer((prev) => {
        if (prev === "X") {
          return "O";
        } else {
          return "X";
        }
      });
    } else {
      return;
    }
  }

  return (
    <div className="tile" onClick={handleClick}>
      {board[tileNumber] === "X" && <i className="fa-solid fa-xmark"></i>}
      {board[tileNumber] === "O" && <i className="fa-regular fa-circle"></i>}
    </div>
  );
}

export default Tile;
