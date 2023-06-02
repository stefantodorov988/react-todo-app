import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Button } from "./Button";

test("renders button with correct text", () => {
  const handleClick = jest.fn(); // Create a mock function for the handleClick prop
  const selected = "Button 1";
  const buttonText = "Button 1";

  const { getByText } = render(
    <Button handleClick={handleClick} selected={selected}>
      {buttonText}
    </Button>
  );

  const button = getByText(buttonText);
  expect(button).toBeInTheDocument();
});

test("calls handleClick when button is clicked", () => {
  const handleClick = jest.fn(); // Create a mock function for the handleClick prop
  const selected = "Button 1";
  const buttonText = "Button 1";

  const { getByText } = render(
    <Button handleClick={handleClick} selected={selected}>
      {buttonText}
    </Button>
  );

  const button = getByText(buttonText);
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});

test("renders button with selected class when selected is true", () => {
  const handleClick = jest.fn();
  const selected = "Button 1";
  const buttonText = "Button 1";

  const { getByText } = render(
    <Button handleClick={handleClick} selected={selected}>
      {buttonText}
    </Button>
  );

  const button = getByText(buttonText);
  expect(button).toHaveClass("selected");
});

test("renders Button component correctly", () => {
  const handleClick = jest.fn();
  const selected = "Button 1";
  const buttonText = "Button 1";

  const { container } = render(
    <Button handleClick={handleClick} selected={selected}>
      {buttonText}
    </Button>
  );

  expect(container.firstChild).toMatchSnapshot();
});
