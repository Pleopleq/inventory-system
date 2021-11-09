import { render, screen } from "@testing-library/react";
import HomePage from "../pages/Home";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function renderWithProvider(name: string): JSX.Element {
  return (
    <Provider store={store}>
      <HomePage name={name} />
    </Provider>
  );
}

describe("It rende home page component", () => {
  it("Should render home page component with props", () => {
    render(renderWithProvider("HomePage"));
    expect(screen.getByText(/Home page/)).toBeInTheDocument();
  });
});
