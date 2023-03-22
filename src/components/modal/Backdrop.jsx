import { useDispatch } from "react-redux";
import { closeModal } from "../../store/modal-slice";

import classess from "./backdrop.module.css";

const Backdrop = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(closeModal())}
      className={classess.backdrop}
    ></div>
  );
};

export default Backdrop;
