function PlayerProfile({ player, score }) {
  return (
    <div className="player-score">
      {player === "X" ? (
        <h1>
          <i className="fa-solid fa-xmark"></i>'s score: {score}
        </h1>
      ) : (
        <h1>
          <i className="fa-regular fa-circle"></i>'s score: {score}
        </h1>
      )}
    </div>
  );
}

export default PlayerProfile;
