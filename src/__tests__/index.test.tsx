import { render, fireEvent } from "@testing-library/react";
import Home from "../app/page";

it("renders homepage unchanged", () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId("mirza")).toBeDefined();

  expect(getByTestId("fishNameValue").textContent).not.toContain("salmon");
  fireEvent.change(getByTestId("fishNameChange"), {
    target: { value: "salmon" },
  });

  expect(getByTestId("fishNameValue").textContent).toContain("salmon");
});
