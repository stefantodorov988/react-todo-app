import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Input } from "./Input";

test("renders input field with placeholder", () => {
  const placeholder = "Please enter text";
  const { getByPlaceholderText } = render(<Input placeholder={placeholder} />);

  const input = getByPlaceholderText(placeholder);
  expect(input).toBeInTheDocument();
});

test("calls handleChange when input value changes", () => {
  const handleChange = jest.fn();
  const { getByPlaceholderText } = render(
    <Input handleChange={handleChange} />
  );

  const input = getByPlaceholderText("Please enter text");
  fireEvent.change(input, { target: { value: "New Value" } });
  expect(handleChange).toHaveBeenCalledTimes(1);
});

test("calls handleKey when a key is pressed", () => {
  const handleKey = jest.fn();
  const { getByPlaceholderText } = render(<Input handleKey={handleKey} />);

  const input = getByPlaceholderText("Please enter text");
  fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
  expect(handleKey).toHaveBeenCalledTimes(1);
});

test("renders input field with provided value", () => {
  const value = "Initial Value";
  const { getByPlaceholderText } = render(<Input value={value} />);

  const input = getByPlaceholderText("Please enter text");
  expect(input.value).toBe(value);
});

test("renders Input component correctly", () => {
  const { container } = render(<Input />);
  expect(container.firstChild).toMatchSnapshot();
});
