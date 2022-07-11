import React from "react";

import Home from "./page/home";

import { JobsrProvider } from "./context/JobsContext";

function App() {
  return (
    <JobsrProvider>
      <Home />
    </JobsrProvider>
  );
}

export default App;
