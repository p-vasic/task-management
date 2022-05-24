import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header test", () => {
  it("should be rendered with ${title}", () => {
    render(<Header title="Home" />);

    expect(screen.getByTestId("header")).toHaveTextContent("Home");
  });
});
