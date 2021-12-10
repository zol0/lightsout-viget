export const ROW_LEN = 5;
export const COL_LEN = 5;

/**
 * Simulates clicking the tile located at `index` and returns the new game state
 *
 * @param index The array index (1-dimensional) of the tile that was clicked
 * @param gameState The current game state representing all tiles
 * @returns The new game state after toggling the `index` tile and the adjacent tiles
 */
export const simulateTileClick = (index: number, gameState: boolean[]) => {
  const rowIndex = Math.floor(index / ROW_LEN);
  const colIndex = Math.floor(index % ROW_LEN);
  const gameStateCopy = [...gameState];

  gameStateCopy[index] = !gameState[index];
  if (rowIndex - 1 >= 0) {
    const above = index - ROW_LEN;
    gameStateCopy[above] = !gameState[above];
  }
  if (rowIndex + 1 <= ROW_LEN - 1) {
    const below = index + ROW_LEN;
    gameStateCopy[below] = !gameState[below];
  }
  if (colIndex - 1 >= 0) {
    const left = index - 1;
    gameStateCopy[left] = !gameState[left];
  }
  if (colIndex + 1 <= COL_LEN - 1) {
    const right = index + 1;
    gameStateCopy[right] = !gameState[right];
  }

  return gameStateCopy;
};

/**
 * Creates a random "Lights Out" game board that is *guaranteed* to be solvable by simulating random clicks on
 * the game tiles.
 *
 * @returns A random board with `ROW_LEN*COL_LEN` number of tiles, and a random amount of tiles toggled on/off
 */
export const randomizeBoard = () => {
  let randomState = Array(ROW_LEN * COL_LEN).fill(false);
  for (let i = 0; i < ROW_LEN * COL_LEN; i++) {
    const randomIndex = Math.floor(Math.random() * ROW_LEN * COL_LEN);
    randomState = simulateTileClick(randomIndex, randomState);
  }
  return randomState;
};
