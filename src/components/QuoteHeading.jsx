import { useContext } from "react";
import AppContext from "../context/AppContext";
import CancelIcon from "../assets/cancel-icon.svg";
import QuoteResponses from "./QuoteResponses";

const QuoteHeading = () => {
  const { setDashboardInfoUI } = useContext(AppContext);

  return (
    <div className="flex items-center justify-between mb-8">
      <section>
        <h1 className="font-bold text-2xl tracking-[-2%] leading-[1.8rem] mb-0.5">
          Quote details
        </h1>
        <p className="text-[#667185] text-sm leading-[1.26875rem]">
          Created on Wed, 12th June 2022, 08:00
        </p>
      </section>
      <section className="flex gap-3">
        <button
          className="text-sm leading-[1.26875rem] font-bold py-2 px-4 rounded-lg bg-[#175CFF] text-white"
          onClick={() => {
            setDashboardInfoUI(<QuoteResponses />);
          }}
        >
          Respond
        </button>
        <button className="text-sm leading-[1.26875rem] font-bold py-2 px-4 rounded-lg bg-[#D42620] center text-white">
          <span className="flex items-center gap-2">
            <span className="size-5">
              <img className="size-full" src={CancelIcon} alt="Cancel Icon" />
            </span>
            <span>Reject</span>
          </span>
        </button>
      </section>
    </div>
  );
};

export default QuoteHeading;
