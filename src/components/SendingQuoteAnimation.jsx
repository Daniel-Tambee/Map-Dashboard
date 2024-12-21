import Modal from "./Modal";
import LoadingAnimation from "../assets/loading-icon.gif";
import { useEffect } from "react";

const SendingQuoteAnimation = props => {
  useEffect(() => {
    setTimeout(() => {
      props.setShowSendingQuoteAnimation(false);
      props.setShowToastNotification(true);
    }, 2500);
  }, []);

  return (
    <Modal>
      <section className="w-[21.1825rem] h-[12.125rem] bg-white center  rounded-2xl">
        <section>
          <section className="center">
            <section className="size-16">
              <img
                className="size-full object-cover"
                src={LoadingAnimation}
                alt="Icon"
              />
            </section>
          </section>
          <p className="font-medium text-sm leading-[1.26875rem] w-36 mt-2 text-center">
            Sending Quotes...
          </p>
        </section>
      </section>
    </Modal>
  );
};

export default SendingQuoteAnimation;
