import React from "react";
import ReactDOM from "react-dom";

const Title = () => (
  <div style={{ color: "red" }}>"My Minimal React Webpack Babel Setup";</div>
);

ReactDOM.render(<Title />, document.getElementById("app"));

module.hot.accept();
