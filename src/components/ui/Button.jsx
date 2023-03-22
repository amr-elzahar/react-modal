import React from "react";

import classes from "./button.module.css";

const Button = (props) => {
  return (
    <button onClick={props.onShowModal} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Button;
