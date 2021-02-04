import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import NewsSearch from "../../containers/NewsSearch";

describe("NewsSearch container", () => {
  it("handles search", () => {
    render(<NewsSearch />);
  });
});
