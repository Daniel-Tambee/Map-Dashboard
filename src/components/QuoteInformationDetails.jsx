import Avatar from "../assets/jane-doe-icon.svg";
import AwaitingIcon from "../assets/awaiting-icon.svg";
import ClientIcon from "../assets/client-icon.svg";
import WestendIcon from "../assets/westend-icon.svg";
import EditIcon from "../assets/edit-icon.svg";

const QuoteInformationDetails = props => {
  return (
    <div className="border border-[#E4E7EC] rounded-lg py-6 px-8 mb-6">
      <section className="flex items-center justify-between mb-8">
        <h1 className="font-bold text-xl leading-6 tracking-[-2%]">
          {props.request ? "Request" : "Quote"} Information
        </h1>
        {!props.request ? (
          <p className="text-[#667185] text-sm leading-[1.26875rem]">
            Expected delivery date : 2024-12-02
          </p>
        ) : (
          <section className="size-6">
            <img className="size-full" src={EditIcon} alt="Icon" />
          </section>
        )}
      </section>
      <section className="flex justify-between items-start">
        <section className="flex items-center">
          <section className="font-medium leading-[1.45rem] text-[#555E68] opacity-[64%] *:w-56">
            <p className="mb-4">Title</p>
            <p className="mb-4">RFQ No</p>
            <p className="mb-4">Requestor</p>
            {!props.request && <p className="mb-4">Status</p>}
            <p className={`${props.request && "mb-4"}`}>Department</p>
            {props.request && <p>Expected delivery date</p>}
          </section>
          <section className="font-medium leading-[1.45rem] text-[#344054]">
            <p className="mb-4">Request for Equipment</p>
            <p className="mb-4">RQ #01234</p>
            <p
              className={`${
                props.request ? "h-6" : "h-7"
              } flex items-center mb-4`}
            >
              <span className="size-6">
                <img className="size-full" src={Avatar} alt="Icon" />
              </span>{" "}
              Jane Doe{" "}
              <span className="text-[#98A2B3] flex items-center">
                {" "}
                <span className="text-[0.6rem] mx-1">●</span> Head Nurse,
                Paediatrics
              </span>
            </p>
            {!props.request && (
              <p className="mb-4 flex items-center">
                <span className="w-[3.9375rem] h-[1.0625rem] inline-block">
                  <img className="size-full" src={AwaitingIcon} alt="Icon" />
                </span>
              </p>
            )}
            <p className={`${props.request && "mb-4"}`}>Maternity</p>
            {props.request && <p>2024-12-04</p>}
          </section>
        </section>
        {!props.request && (
          <section className="p-4 rounded-[0.625rem] border border-[#E4E7EC] w-[22rem]">
            <section className="flex items-center gap-2 mb-2">
              <span className="inline-block size-5">
                <img className="size-full" src={ClientIcon} alt="Icon" />
              </span>
              <span className="inline-block text-xs text-[#475367] leading-[1.0875rem]">
                Client
              </span>
            </section>
            <section className="flex items-center gap-3">
              <section className="size-8">
                <img className="size-full" src={WestendIcon} alt="Icon" />
              </section>
              <section>
                <h1 className="text-[#101928] font-medium text-sm leading-[1.26875rem]">
                  Westend Hospital
                </h1>
                <p className="text-xs text-[#475367] leading-[1.0875rem]">
                  Clear street
                </p>
              </section>
            </section>
          </section>
        )}
      </section>
    </div>
  );
};

export default QuoteInformationDetails;
