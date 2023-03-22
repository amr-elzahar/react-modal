import { useDispatch, useSelector } from "react-redux";
import { showModal, closeModal } from "../../store/modal-slice";
import classes from "./button.module.css";

const Button = (props) => {
  const dispatch = useDispatch();
  const modalIsShown = useSelector((state) => state.modal.isShown);
  const buttonHandler = () => {
    if (modalIsShown) dispatch(closeModal());
    if (!modalIsShown) dispatch(showModal());
  };
  return (
    <button onClick={buttonHandler} className={classes.btn}>
      {props.children}
    </button>
  );
};

export default Button;
