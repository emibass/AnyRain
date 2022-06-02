import React from "react";
import * as ReactDOM from "react-dom/client";

import App from "./components/App";

//old code: ReactDOM.render(<App />, document.getElementById("root"));

const container = document.getElementById("root");

// Create a root.
const root = ReactDOM.createRoot(container);
root.render( <App />);

