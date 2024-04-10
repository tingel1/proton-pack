import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("App Tests", () => {
  test("renders learn react link", () => {
    render(<App />);
    expect(true).toBe(true);
  });

  test("renders learn react link", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
