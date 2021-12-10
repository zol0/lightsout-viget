import React from "react";

type GameTileProps = {
  lightOn: boolean;
  onTileClick: Function;
};

const GameTile: React.FC<GameTileProps> = ({ lightOn, onTileClick }) => {
  return (
    <button
      className={`pb-[100%] rounded-md ${
        lightOn
          ? "bg-yellow-300 hover:bg-yellow-400"
          : "bg-slate-600 hover:bg-slate-700"
      }`}
      onClick={(event) => onTileClick()}
      id="gameTile"
    />
  );
};

export default GameTile;
