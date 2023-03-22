import React from "react";

import classess from "./backdrop.module.css";

const Backdrop = (props) => {
  const hideModalHandler = () => {
    props.onHideModal();
  };
  return <div onClick={hideModalHandler} className={classess.backdrop}></div>;
};

export default Backdrop;
