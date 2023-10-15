import { createContext, useEffect, useState } from "react";

export const GameContext = createContext();

export function GameContextProvider({ children }) {
  const emptyStringArray = Array(9).fill("");
  const [board, setBoard] = useState(emptyStringArray);
  const [currPlayer, setCurrPlayer] = useState("X");
  const [isGameFinish, setIsGameFinish] = useState(false);
  const [winner, setWinner] = useState();
  const [score, setScore] = useState({ xPlayer: 0, oPlayer: 0 });

  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // checking if the game is finish every time the board changes
  useEffect(() => {
    checkIfGameFinish();
  }, [board]);

  // for changing score
  useEffect(() => {
    let newScore;
    if (isGameFinish && winner === "X") {
      newScore = score.xPlayer + 1;
      setScore((prev) => {
        return { ...prev, xPlayer: newScore };
      });
    } else if (isGameFinish && winner === "O") {
      newScore = score.oPlayer + 1;
      setScore((prev) => {
        return { ...prev, oPlayer: newScore };
      });
    } else {
      return;
    }
  }, [isGameFinish]);

  // function for checking if the game is finished
  function checkIfGameFinish() {
    winningCombination.forEach((combination) => {
      if (
        board[combination[0]] !== "" &&
        board[combination[0]] === board[combination[1]] &&
        board[combination[1]] === board[combination[2]]
      ) {
        setIsGameFinish(true);
        setWinner(board[combination[0]]);
      }
    });

    // check if it's a draw
    if (board.every((item) => item !== "")) {
      setIsGameFinish(true);
    }
  }

  return (
    <GameContext.Provider
      value={{
        currPlayer,
        setCurrPlayer,
        board,
        setBoard,
        isGameFinish,
        setIsGameFinish,
        winner,
        setWinner,
        score,
        setScore,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
