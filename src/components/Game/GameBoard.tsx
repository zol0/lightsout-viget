import React, { useEffect, useState } from "react";
import {
  COL_LEN,
  ROW_LEN,
  randomizeBoard,
  simulateTileClick,
} from "../../utils/GameUtils";
import GameTile from "./GameTile";

const GameBoard: React.FC = (props) => {
  const [gameState, setGameState] = useState<boolean[]>(randomizeBoard());
  const [totalMoves, setTotalMoves] = useState(0);

  // Check to see if the game has been won on each game state change
  useEffect(() => {
    if (gameState.every((lightOn) => !lightOn)) {
      const playAgain = window.confirm(
        `Congratulations, you managed to turn off all of the lights in ${totalMoves} moves! Do you want to play again?`
      );
      if (playAgain) {
        resetGame();
      }
    }
  }, [gameState]);

  const resetGame = () => {
    setTotalMoves(0);
    setGameState(randomizeBoard());
  };

  const onGameTileClick = (index: number) => {
    const newGameState = simulateTileClick(index, gameState);

    setTotalMoves(totalMoves + 1);
    setGameState(newGameState);
  };

  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-between flex-wrap sm:justify-end items-center sm:space-x-4">
          <p className="hidden md:inline text-sm xl:text-base text-slate-200 py-2 md:py-4">
            Rules: Clicking a tile inverts that tile and its neighboring tiles.
            Your goal is to turn off all of the{" "}
            <span className="font-bold text-yellow-200">light tiles</span> so
            that the board only contains{" "}
            <span className="font-bold text-slate-500">off tiles</span>. All
            generated boards are solvable.
          </p>
          <p className="text-slate-100 text-base lg:text-lg font-bold">
            Total Moves: {totalMoves}
          </p>

          <button
            className="bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 px-5 py-2 text-sm md:text-lg rounded-full font-semibold text-white"
            onClick={() => resetGame()}
            name="restart"
          >
            Restart
          </button>
        </div>
      </div>
      <div className="mt-4 items-center">
        <div
          className={`grid grid-flow-row gap-1`}
          style={{
            gridTemplateColumns: `repeat(${ROW_LEN}, minmax(0, 1fr))`,
            gridTemplateRows: `repeat(${COL_LEN}, minmax(0, 1fr))`,
          }}
        >
          {gameState.map((lightOn, index) => (
            <GameTile
              key={index}
              lightOn={lightOn}
              onTileClick={() => onGameTileClick(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default GameBoard;
