import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders title and game board", () => {
  render(<App />);
  expect(screen.getByText(/Lights/i)).toBeInTheDocument();
  expect(screen.getByText(/Out/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /restart/i }));
});
