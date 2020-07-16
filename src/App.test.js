import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {
  render,
  fireEvent,
  screen,
  waitFor
} from "@testing-library/react";
import App from "./App";
import ContactForm from "./components/ContactForm";

test("renders App without crashing", () => {
  render(<App />);
});

test("test the lenght of first name input", () => {
  const { getByTestId } = render(<ContactForm />);

  let firstName = getByTestId("firstName");
  expect(firstName.placeholder).toBe("Edd");
});

test("testing the texts", () => {
  const { getByText } = render(<ContactForm />);

  getByText(/first name/i);
  getByText(/last name/i);
  getByText(/email/i);

  expect(screen.getByRole("button", /submit/));
});

test("test button by clicking on it", async () => {
  const { getByTestId, getByText } = render(<ContactForm />);

  const firstName = getByTestId("firstName");
  fireEvent.change(firstName, {
    target: { value: "Paulo" },
  });

  const lastName = getByTestId("lastName");
  fireEvent.change(lastName, {
    target: { value: "Alexandre" },
  });

  const email = getByTestId("email");
  fireEvent.change(email, {
    target: { value: "paulo@paulo.com" },
  });

  const message = getByTestId("message");
  fireEvent.change(message, {
    target: { value: "message" },
  });

  const submitButton = getByTestId("submitButton");
  await waitFor(() => {
    fireEvent.click(submitButton);
  });
});
