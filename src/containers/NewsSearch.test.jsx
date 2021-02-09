global.fetch = require("node-fetch");
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NewsSearch from "./NewsSearch";

describe("NewsSearch", () => {
  it("mocks a user typing in the search bar", () => {
    render(<NewsSearch />);

    const searchInput = screen.getByTestId("search-input");
    userEvent.type(searchInput, "puppies");
    expect(searchInput).toHaveValue("puppies");
  });
});
