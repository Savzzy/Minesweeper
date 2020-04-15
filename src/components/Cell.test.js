import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import Cell from "./Cell";

afterEach(cleanup);

describe("cell states", () => {
  test("cell starts out hidden", () => {
    const { queryByText } = render(<Cell key="1" gridCell="3" />);

    expect(queryByText("3")).toBe(null);
  });

  test("cell should reveal when clicked", () => {
    const { queryByTestId, queryByText } = render(
      <Cell key="1" gridCell={3} />
    );

    fireEvent.contextMenu(queryByTestId("cell"));

    expect(queryByText("3")).toBe(null);
  });
});
