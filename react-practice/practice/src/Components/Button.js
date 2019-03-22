import React from "react";

const Button = props => {
  const { fun, id } = props;
  return <button onClick={() => fun(id)}>{props.children}</button>;
};

export default Button;
