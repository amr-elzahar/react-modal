import { useState, useEffect } from "react";

import Card from "./components/ui/Card";
import Button from "./components/ui/Button";
import Modal from "./components/modal/Modal";
import Backdrop from "./components/modal/Backdrop";

function App() {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const keyDownHandler = (event) => {
      if (event.key === "Escape") setOpenModal(false);
    };
    if (openModal) {
      window.addEventListener("keydown", keyDownHandler);
      return () => {
        window.removeEventListener("keydown", keyDownHandler);
      };
    }
  }, [openModal]);

  return (
    <div className="app">
      <Card>
        <Button onShowModal={() => setOpenModal(true)}>Show modal</Button>
      </Card>
      {openModal && <Modal onHideModal={() => setOpenModal(false)} />}
      {openModal && <Backdrop onHideModal={() => setOpenModal(false)} />}
    </div>
  );
}

export default App;
