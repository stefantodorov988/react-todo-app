import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Checkbox } from "./Checkbox";

test("renders checkbox with label", () => {
  const label = "Checkbox Label";
  const { getByLabelText } = render(<Checkbox label={label} />);

  const checkbox = getByLabelText(label);
  expect(checkbox).toBeInTheDocument();
});

test("handles checkbox click", () => {
  const handleCheckbox = jest.fn(); // Create a mock function for the handleCheckbox prop
  const label = "Checkbox Label";
  const { getByLabelText } = render(
    <Checkbox label={label} handleCheckbox={handleCheckbox} />
  );

  const checkbox = getByLabelText(label);
  fireEvent.click(checkbox);
  expect(handleCheckbox).toHaveBeenCalledTimes(1);
});

test("renders checkbox initially unchecked", () => {
  const label = "Checkbox Label";
  const { getByLabelText } = render(<Checkbox label={label} />);

  const checkbox = getByLabelText(label);
  expect(checkbox).not.toBeChecked();
});

test("renders checkbox initially checked", () => {
  const label = "Checkbox Label";
  const { getByLabelText } = render(<Checkbox label={label} checked={true} />);

  const checkbox = getByLabelText(label);
  expect(checkbox).toBeChecked();
});

test("applies additional props to the checkbox input", () => {
  const label = "Checkbox Label";
  const dataTestId = "my-checkbox";
  const { getByTestId } = render(
    <Checkbox label={label} data-testid={dataTestId} />
  );

  const checkbox = getByTestId(dataTestId);
  expect(checkbox).toBeInTheDocument();
});

test("renders Checkbox component correctly", () => {
  const label = "Checkbox Label";
  const checked = true;
  const handleCheckbox = jest.fn();

  const { container } = render(
    <Checkbox label={label} checked={checked} handleCheckbox={handleCheckbox} />
  );

  expect(container.firstChild).toMatchSnapshot();
});
