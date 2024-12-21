import { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import TermsSection from "./TermsSection";
import AttachmentSection from "./AttachmentSection";
import ReviewQuote from "./ReviewQuote";
import ConfirmationPopup from "./ConfirmationPopup";
import SendingQuoteAnimation from "./SendingQuoteAnimation";
import ToastNotification from "./ToastNotification";

const QuoteResponses = () => {
  let QuoteResponseUI;
  const { currentPage, setCurrentPage, setShowModal } = useContext(AppContext),
    [confirmationMesage, setConfirmationMessage] = useState(false),
    [showSendingQuoteAnimation, setShowSendingQuoteAnimation] = useState(false),
    [showToastNotification, setShowToastNotification] = useState(false);

  switch (currentPage) {
    case 1:
      QuoteResponseUI = <TermsSection />;
      break;
    case 2:
      QuoteResponseUI = <AttachmentSection />;
      break;
    default:
      QuoteResponseUI = <ReviewQuote />;
      break;
  }

  return (
    <div>
      <h2 className="font-medium text-sm leading-[1.26875rem] text-[#667185] mb-8">
        <span className="text-[#175CFF]">Quotes</span>{" "}
        <span className="mx-1.5">/</span>{" "}
        <span>
          {currentPage === 3 ? "Request for Quote" : "Quote Response"}
        </span>
      </h2>
      <div className="border border-[#E4E7EC] rounded-lg px-5 py-6">
        <section className="w-[95%] flex items-center justify-between">
          <section className="flex gap-4">
            <section
              className={`size-8 rounded-[50%] font-bold center ${
                currentPage === 1
                  ? "bg-[#175CFF] text-white"
                  : "border border-[#98A2B3] text-[#98A2B3]"
              }`}
            >
              1
            </section>
            <section>
              <h1
                className={`leading-[1.262rem] mb-1.5 ${
                  currentPage === 1
                    ? "font-bold text-[#1A1A21]"
                    : "text-[#667185]"
                }`}
              >
                Request Information
              </h1>
              <p
                className={`text-xs leading-[1.0875rem] ${
                  currentPage === 1 ? "text-[#475367]" : "text-[#667185]"
                }`}
              >
                Provide details about the RFQ
              </p>
            </section>
          </section>
          <section className="flex gap-4">
            <section
              className={`size-8 rounded-[50%] font-bold center ${
                currentPage === 2
                  ? "bg-[#175CFF] text-white"
                  : "border border-[#98A2B3] text-[#98A2B3]"
              }`}
            >
              2
            </section>
            <section>
              <h1
                className={`leading-[1.262rem] mb-1.5 ${
                  currentPage === 2
                    ? "font-bold text-[#1A1A21]"
                    : "text-[#667185]"
                }`}
              >
                Terms and Attachments
              </h1>
              <p
                className={`text-xs leading-[1.0875rem] ${
                  currentPage === 2 ? "text-[#475367]" : "text-[#667185]"
                }`}
              >
                Payment and delivery terms
              </p>
            </section>
          </section>
          <section className="flex gap-4">
            <section
              className={`size-8 rounded-[50%] font-bold center ${
                currentPage === 3
                  ? "bg-[#175CFF] text-white"
                  : "border border-[#98A2B3] text-[#98A2B3]"
              }`}
            >
              3
            </section>
            <section>
              <h1
                className={`leading-[1.262rem] mb-1.5 ${
                  currentPage === 3
                    ? "font-bold text-[#1A1A21]"
                    : "text-[#667185]"
                }`}
              >
                Review
              </h1>
              <p
                className={`text-xs leading-[1.0875rem] ${
                  currentPage === 3 ? "text-[#475367]" : "text-[#667185]"
                }`}
              >
                Confirm all information provided
              </p>
            </section>
          </section>
        </section>
      </div>
      <div className="border border-[#E4E7EC] rounded-lg p-6 mt-8">
        {QuoteResponseUI}
        <footer className="flex justify-end gap-6 mt-10">
          <button
            className="rounded-lg center h-10 w-[4.25rem] border border-[#E4E7EC] text-[#475367]"
            onClick={() => {
              setCurrentPage(1);
              setShowModal(false);
              setConfirmationMessage(false);
            }}
          >
            Cancel
          </button>
          <button className="rounded-lg center h-10 w-[11.7rem] text-[#175CFF] border border-[#175CFF]">
            Save as draft
          </button>
          <button
            className="rounded-lg center h-10 w-[11.7rem] bg-[#175CFF] text-white"
            onClick={() => {
              setCurrentPage(prevState => {
                if (currentPage < 3) {
                  return prevState + 1;
                } else {
                  setShowModal(true);
                  setConfirmationMessage(true);
                  return 3;
                }
              });
            }}
          >
            Continue
          </button>
        </footer>
        {confirmationMesage && (
          <ConfirmationPopup
            setConfirmationMessage={setConfirmationMessage}
            setShowSendingQuoteAnimation={setShowSendingQuoteAnimation}
          />
        )}
        {showSendingQuoteAnimation && (
          <SendingQuoteAnimation
            setShowSendingQuoteAnimation={setShowSendingQuoteAnimation}
            setShowToastNotification={setShowToastNotification}
          />
        )}
        {showToastNotification && (
          <ToastNotification
            setShowToastNotification={setShowToastNotification}
          />
        )}
      </div>
    </div>
  );
};

export default QuoteResponses;
