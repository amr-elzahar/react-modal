import React from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";

import classes from "./modal.module.css";
const Modal = () => {
  return (
    <div className={classes.modal}>
      <Card>
        <h2>Click button below to hide modal</h2>
        <Button>Hide Modal</Button>
      </Card>
    </div>
  );
};

export default Modal;
