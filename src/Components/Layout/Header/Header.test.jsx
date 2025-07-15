import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Navbar from "./Header";
import "@testing-library/jest-dom/vitest";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store/store";

describe("Test Header Component", () => {
  test("renders elements correctly in the dom", async () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Navbar />
        </Provider>
      </BrowserRouter>
    );
    screen.debug();
    const toggleIcon = screen.getByTestId("toggle-icon");
    expect(toggleIcon).toBeInTheDocument();
    const logo = screen.getByTestId("logo");
    expect(logo).toBeInTheDocument();
    const logoTitle = screen.getByTestId("logo-title");
    expect(logoTitle).toBeInTheDocument();
    // const loggedUserSection = await screen.findByTestId("loggedUserSection");
    // expect(loggedUserSection).not.toBeInTheDocument();
    const loginBtn = await screen.findByText("LOGIN");
    expect(loginBtn).toBeInTheDocument();
  });

  test("Check Pages Link", () => {
    const links = [
      "Home",
      "Categories",
      "Blogs",
      "Products",
      "About",
      "Contact",
    ];
    const pagesItems = screen.getByTestId("pages-items");
    const listItems = pagesItems.querySelectorAll("li");
    expect(listItems).toHaveLength(links.length);

    links.forEach((link) => {
      const pageLink = screen.getByTestId(link);
      expect(pageLink).toBeInTheDocument();
      // check href attripute
      const page = link === "Home" ? "/" : `/${link.toLocaleLowerCase()}`;
      const linkHref = screen.getByTestId(`/${link}`);
      expect(linkHref.getAttribute("href")).toBe(page);
    });
  });
});
