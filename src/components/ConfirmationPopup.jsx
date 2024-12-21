import AppContext from "../context/AppContext";
import { useContext } from "react";
import Modal from "./Modal";

const ConfirmationPopup = props => {
  const { setShowModal } = useContext(AppContext);

  return (
    <Modal>
      <section className="rounded py-8 px-6 w-[35.5rem] bg-white">
        <h1 className="text-[#101928] text-xl tracking-[-2%] font-bold leading-[1.5rem] mb-6">
          Confirmation
        </h1>
        <p className="mb-8 text-[#475367] text-sm font-medium leading-[1.26875rem]">
          You are about to submit this quote in response to RFQ ID, this will
          immediately be sent to the client “Westend Clear Hospital”. Are you
          sure you want to proceed?
        </p>
        <section className="flex justify-end gap-4">
          <button
            className="rounded-lg font-bold text-sm leading-[1.26875rem] py-2 px-4 border border-[#D0D5DD] text-[#344054]"
            onClick={() => {
              setShowModal(false);
              props.setConfirmationMessage(false);
            }}
          >
            Cancel
          </button>
          <button
            className="rounded-lg font-bold text-sm leading-[1.26875rem] py-2 px-4 bg-[#175CFF] text-white"
            onClick={() => {
              props.setConfirmationMessage(false);
              props.setShowSendingQuoteAnimation(true);
            }}
          >
            Continue
          </button>
        </section>
      </section>
    </Modal>
  );
};

export default ConfirmationPopup;
