import { useEffect } from "react";
import ToastIcon from "../assets/toast-notification-icon.svg";
import Modal from "./Modal";
import AppContext from "../context/AppContext";
import { useContext } from "react";

const ToastNotification = props => {
  const { setShowModal } = useContext(AppContext);

  useEffect(() => {
    setTimeout(() => {
      props.setShowToastNotification(false);
      setShowModal(false);
    }, 2000);
  }, []);
  return (
    <Modal>
      <section className="bg-white fixed right-0 top-0">
        <img src={ToastIcon} alt="Icon" />
      </section>
    </Modal>
  );
};

export default ToastNotification;
