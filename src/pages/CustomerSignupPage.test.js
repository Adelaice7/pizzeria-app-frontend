import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CustomerSignupPage } from "./CustomerSignupPage";

beforeEach(cleanup);

test("has header of Sign Up", async () => {
  render(<CustomerSignupPage />);

  expect(screen.getByRole("heading")).toHaveTextContent("Sign Up");
});

test("has input for first name", async () => {
  render(<CustomerSignupPage />);
  expect(screen.getByPlaceholderText("Your first name")).toBeInTheDocument();
});
