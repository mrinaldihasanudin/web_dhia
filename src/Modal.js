import React, { useCallback, useEffect, useRef } from "react";

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal ? (
        <section className="modal_components" ref={modalRef}>
          <div className="modal_row">
            <button onClick={() => setShowModal(false)}>X</button>
            <h1>Hello Modal</h1>
          </div>
        </section>
      ) : null}
    </>
  );
};

export default Modal;
