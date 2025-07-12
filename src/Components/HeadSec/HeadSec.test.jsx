import React from "react";
import { test, expect, describe , afterEach  } from "vitest";
import { render, screen } from "@testing-library/react";
import HeadSec from "./HeadSec";
import "@testing-library/jest-dom/vitest";
afterEach(() => {
  cleanup(); // ينظف الـ DOM بعد كل تيست
});
describe("Test Head Section Component", () => {
  test("Check Head Section Heading In The Dom", () => {
    render(<HeadSec />);
    expect(screen.getByTestId('subtitle-sec')).toBeInTheDocument();
  });

  test("Check Props Is Valid", () => {
    render(<HeadSec title="category section" />);
    const title = screen.getByTestId('title-sec');
    expect(title).toBeInTheDocument();
  });
});
