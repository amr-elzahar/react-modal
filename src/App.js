import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { closeModal } from "./store/modal-slice";

import Modal from "./components/modal/Modal";
import Backdrop from "./components/modal/Backdrop";
import Card from "./components/ui/Card";
import Button from "./components/ui/Button";

function App() {
  const dispatch = useDispatch();
  const modalIsShown = useSelector((state) => state.modal.isShown);
  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") dispatch(closeModal());
    };

    if (modalIsShown) {
      document.addEventListener("keydown", keyDownHandler);

      return () => document.removeEventListener("keydown", keyDownHandler);
    }
  }, [modalIsShown, dispatch]);

  return (
    <div className="app">
      <Card>
        <Button>Show modal</Button>
      </Card>
      {modalIsShown && <Modal />}
      {modalIsShown && <Backdrop />}
    </div>
  );
}

export default App;
