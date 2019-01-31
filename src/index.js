import React from "react";
import ReactDOM from "react-dom";

const Title = () => (
<<<<<<< HEAD
  <div style={{ color: "red" }}>"My Minimal React Webpack Babel Setup";</div>
=======
  <div style={{ color: "red" }}>
    "My Minimal React Webpack Babel Setup";
    <p>Image below checks to make sure npm image-loader & webpack is working</p>
    <img
      style={{ width: 150 }}
      src={require("../dist/img/react.jpg")}
      alt="bank"
    />
  </div>
>>>>>>> d8896b30581b2006074fbba11227169e7343acd0
);

ReactDOM.render(<Title />, document.getElementById("app"));

module.hot.accept();
