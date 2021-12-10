import { fireEvent, render, screen } from "@testing-library/react";
import GameBoard from "./GameBoard";
import { COL_LEN, ROW_LEN } from "../../utils/GameUtils";

test("Renders the game board and game tiles", () => {
  render(<GameBoard />);
  expect(screen.getByText(/Total Moves/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /restart/i }));
  // Each game tile is a button + restart button
  expect(screen.getAllByRole("button")).toHaveLength(ROW_LEN * COL_LEN + 1);
});

test("Increments the total move count and resets it", async () => {
  render(<GameBoard />);
  const gameTileButton = screen
    .getAllByRole("button")
    .filter((element) => element.textContent !== "Restart")[0];

  // Click the gameTile twice
  await fireEvent.click(gameTileButton);
  await fireEvent.click(gameTileButton);
  expect(screen.getByText(/Total Moves: 2/i)).toBeInTheDocument();

  // Reset the game
  await fireEvent.click(screen.getByRole("button", { name: /restart/i }));
  expect(screen.getByText(/Total Moves: 0/i)).toBeInTheDocument();
});
