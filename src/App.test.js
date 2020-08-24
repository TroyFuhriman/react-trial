import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import App1 from "./App1";

test(() => {
  const { getByText } = render(<App />);
  const {} = render(<App1 />);
});
