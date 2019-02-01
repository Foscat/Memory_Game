import React from "react";


const Wrapper = props => (
  // Single divs do not need parentheses for rendering
  <div className="wrapper center">{props.children}</div>
);

export default Wrapper;