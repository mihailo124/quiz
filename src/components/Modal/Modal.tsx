import React, { useRef, useEffect } from "react";
import styles from "./Modal.module.css";


type ModalProps = {
  show: boolean;
  setModalShow: (arg1: boolean) => void;
};

const Modal: React.FC<ModalProps> = ({ show, setModalShow }) => {
  const hideModal = () => setModalShow(false);

  useEffect(() => {
    if (show) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [show]);

  const modal = useRef<HTMLInputElement>(null);
  const backdrop = useRef<HTMLInputElement>(null);

  const onHideAnimation = (callback: () => void) => {
    if (modal && modal.current && backdrop && backdrop.current) {
      modal.current.style.transform = "translate3d(-15rem, 0, 0)";
      backdrop.current.style.opacity = "0";
      setTimeout(callback, 200);
    }
  };

  return show ? (
    <div className={styles.backdrop} ref={backdrop}>
      <div
        className={styles.backdropClickable}
        onClick={() => onHideAnimation(hideModal)}
      ></div>
      <div className={styles.modalWindow} ref={modal}>
        <div className={styles.modalMain}>lorem ipsum</div>
        <div className={styles.modaButtons}>
          <div onClick={hideModal}>Cancel</div>
          <div onClick={hideModal}>Save</div>
        </div>
      </div>
    </div>
  ) : null;
};

// const mapStateToProps = (state: any) => {
//     return {
//         questions: state.questions
//     };
// };

// const mapDispatchToProps = (
//     dispatch: (obj: {
//         type: string;
//         payload: { id: number; text?: string };
//     }) => any
// ) => {
//     return {
//         changeQuestion: (id: number, text: string) =>
//             dispatch({ type: "CHANGE_QUESTION", payload: { id, text } }),
//         deleteQuestion: (id: number) =>
//             dispatch({ type: "DELETE_QUESTION", payload: { id } })
//     };
// };

export default Modal;
