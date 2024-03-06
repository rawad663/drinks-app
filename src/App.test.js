import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const title = screen.getByText(/drinks/i);
  expect(title).toBeInTheDocument();
});

test("renders skeleton banner", () => {
  render(<App />);
  const skeleton = screen.getByLabelText("banner-skeleton");
  expect(skeleton).toBeInTheDocument();
  expect(skeleton).toHaveStyle("width: 100%");
  expect(skeleton).toHaveStyle("height: 100px");
});

test("renders drink skeleton", () => {
  render(<App />);

  const skeletons = screen.queryAllByLabelText(/{0-9}-skeleton/);

  skeletons.forEach((skeleton) => {
    expect(skeleton).toBeInTheDocument();
    expect(skeleton).toHaveStyle("width: 400px");
    expect(skeleton).toHaveStyle("height: 300px");
  });
});
