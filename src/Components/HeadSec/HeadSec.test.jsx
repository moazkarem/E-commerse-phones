import React from "react";
import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import HeadSec from "./HeadSec";
import "@testing-library/jest-dom/vitest";

describe("Test Head Section Component", () => {
  test("Test Component In The Doc With Empty Props", () => {
    render(<HeadSec />);
    const title = screen.queryByTestId("title-sec");
    expect(title).not.toBeInTheDocument();
  });

  test("Test Component In The Doc With a Props", () => {
    render(<HeadSec title={"category section"} />);
    const title = screen.getByText(/category section/i);
    expect(title).toBeInTheDocument();
  });
});
