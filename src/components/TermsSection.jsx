import QuoteIntroHeading from "./QuoteIntroHeading";
import CancelIcon from "../assets/quote-cancel-icon.svg";
import CalendarIcon from "../assets/quote-calendar-icon.svg";
import PackIcon from "../assets/pack-icon.svg";
import DollarIcon from "../assets/dollar-icon.svg";
import BinIcon from "../assets/bin-icon.svg";

const TermsSection = () => {
  return (
    <div>
      <QuoteIntroHeading
        heading="Request for Quote"
        paragraph="Fill out these details to send the RFQ"
      />
      <div className="flex gap-[1.125rem] flex-wrap mb-6">
        <section className="w-[calc(50%-0.5625rem)]">
          <label
            className="block text-[#475367] font-bold text-sm leading-[1.26875rem] mb-1"
            htmlFor="RFQ-No"
          >
            RFQ No
          </label>
          <input
            className="block w-full border border-[#D0D5DD] rounded-md h-10 px-3 bg-[#F0F2F5] text-[#F0F2F5] text-sm leading-[1.26875rem]"
            placeholder="RFQ-10234"
            type="text"
            id="RFQ No"
          />
        </section>
        <section className="w-[calc(50%-0.5625rem)]">
          <label
            className="block text-[#475367] font-bold text-sm leading-[1.26875rem] mb-1"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="block w-full border border-[#D0D5DD] rounded-md h-10 px-3 bg-[#F0F2F5] text-[#F0F2F5] text-sm leading-[1.26875rem]"
            placeholder="Request for Equipment"
            type="text"
            id="title"
          />
        </section>
        <section className="w-[calc(50%-0.5625rem)]">
          <label
            className="block text-[#475367] font-bold text-sm leading-[1.26875rem] mb-1"
            htmlFor="department"
          >
            Departmemt
          </label>
          <section className="border border-[#D0D5DD] rounded-md h-10 px-3 bg-[#F0F2F5] text-[#F0F2F5] text-sm leading-[1.26875rem] gap-3 flex items-center">
            <input
              className="block w-full "
              placeholder="Maternity"
              type="text"
            />
            <span className="block size-5">
              <img className="size-full" src={CancelIcon} alt="Icon" />
            </span>
          </section>
        </section>
        <section className="w-[calc(50%-0.5625rem)]">
          <label
            className="block text-[#475367] font-bold text-sm leading-[1.26875rem] mb-1"
            htmlFor="EDD"
          >
            Expected Delivery Date
          </label>
          <section>
            <section className="border border-[#D0D5DD] rounded-md h-10 px-3 bg-[#F0F2F5] text-[#F0F2F5] text-sm leading-[1.26875rem] gap-2 flex items-center">
              <span className="block size-5">
                <img className="size-full" src={CalendarIcon} alt="Icon" />
              </span>
              <input
                className="block w-full"
                placeholder="2024-12-02"
                type="text"
                id="EDD"
              />
            </section>
            <p className="font-medium text-xs leading-[1.0875rem] tracking-[-0.5%] text-[#667185] mt-2">
              Calculated based on lead time and issue date
            </p>
          </section>
        </section>
      </div>
      <div className="pt-4 pb-8 border-[#D0D5DD] border-t border-b">
        <h2 className="font-bold leading-[1.45rem] text-[#1A1A21] mb-2">
          Add Items
        </h2>
        <section className="h-7 bg-[#F7F9FC] flex items-center px-2 font-medium text-sm leading-[1.26875rem] text-[#667185]">
          <section className="flex justify-between w-full">
            <h3 className="w-[8.7375rem]">Items</h3>
            <h3 className="w-[8.7375rem]">Variant</h3>
            <h3 className="w-[8.7375rem]">Quantity</h3>
            <h3 className="w-[8.7375rem]">Price</h3>
            <h3 className="w-[8.7375rem]">Expected delivery d...</h3>
            <h3 className="w-[8.7375rem]">Amount</h3>
            <h3 className="size-6"></h3>
          </section>
        </section>
        <section className="mt-4 flex justify-between mb-4">
          <select
            className="h-9 border w-[9.2375rem] border-[#D0D5DD] bg-[#F0F2F5] rounded-md text-sm text-[#98A2B3] leading-[1.26875rem]"
            name="title"
            id="title"
          >
            <option value="oxygen-concentration">Oxygen Concentration</option>
            <option value="mechanical-ventilator">Mechanical Ventilator</option>
            <option value="patient-monitor">Patient Monitor</option>
            <option value="mechanical-ventilator">Mechanical Ventilator</option>
          </select>
          <select
            className="h-9 border w-[8.7375rem] border-[#D0D5DD] bg-[#F0F2F5] rounded-md text-sm text-[#98A2B3] leading-[1.26875rem]"
            name="title"
            id="title"
          >
            <option value="oxygen-concentration">Blue</option>
            <option value="mechanical-ventilator">NIL</option>
          </select>
          <section className="w-[8.7375rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center border-[#D0D5DD] border justify-between">
            <span className="block">100</span>
            <span className="block w-[2.625rem] h-6">
              <img className="size-full" src={PackIcon} alt="Icon" />
            </span>
          </section>
          <section className="w-[8.7375rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center border-[#D0D5DD] border">
            <span className="block size-5 mr-2">
              <img className="size-full" src={DollarIcon} alt="Icon" />
            </span>
            <span className="block text-sm leading-[1.26875rem]">12.00</span>
          </section>
          <section className="w-[8.7375rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center border-[#D0D5DD] border">
            <span className="block size-5 mr-2">
              <img className="size-full" src={CalendarIcon} alt="Icon" />
            </span>
            <span className="block text-sm leading-[1.26875rem]">
              2023-12-02
            </span>
          </section>
          <section className="w-[12rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center justify-between">
            <span className="block text-sm leading-[1.26875rem] font-bold text-[#344054]">
              $1200.00
            </span>
            <span className="block size-6">
              <img className="size-full" src={BinIcon} alt="Icon" />
            </span>
          </section>
        </section>
        <section className="mt-4 flex justify-between mb-4">
          <select
            className="h-9 border w-[9.2375rem] border-[#D0D5DD] bg-[#F0F2F5] rounded-md text-sm text-[#98A2B3] leading-[1.26875rem]"
            name="title"
            id="title"
          >
            <option value="oxygen-concentration">Oxygen Concentration</option>
            <option value="mechanical-ventilator">Mechanical Ventilator</option>
            <option value="patient-monitor">Patient Monitor</option>
            <option value="mechanical-ventilator">Mechanical Ventilator</option>
          </select>
          <select
            className="h-9 border w-[8.7375rem] border-[#D0D5DD] bg-[#F0F2F5] rounded-md text-sm text-[#98A2B3] leading-[1.26875rem]"
            name="title"
            id="title"
          >
            <option value="oxygen-concentration">Blue</option>
            <option value="mechanical-ventilator">NIL</option>
          </select>
          <section className="w-[8.7375rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center border-[#D0D5DD] border justify-between">
            <span className="block">100</span>
            <span className="block w-[2.625rem] h-6">
              <img className="size-full" src={PackIcon} alt="Icon" />
            </span>
          </section>
          <section className="w-[8.7375rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center border-[#D0D5DD] border">
            <span className="block size-5 mr-2">
              <img className="size-full" src={DollarIcon} alt="Icon" />
            </span>
            <span className="block text-sm leading-[1.26875rem]">12.00</span>
          </section>
          <section className="w-[8.7375rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center border-[#D0D5DD] border">
            <span className="block size-5 mr-2">
              <img className="size-full" src={CalendarIcon} alt="Icon" />
            </span>
            <span className="block text-sm leading-[1.26875rem]">
              2023-12-02
            </span>
          </section>
          <section className="w-[12rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center justify-between">
            <span className="block text-sm leading-[1.26875rem] font-bold text-[#344054]">
              $1200.00
            </span>
            <span className="block size-6">
              <img className="size-full" src={BinIcon} alt="Icon" />
            </span>
          </section>
        </section>
        <section className="mt-4 flex justify-between mb-4">
          <select
            className="h-9 border w-[9.2375rem] border-[#D0D5DD] bg-[#F0F2F5] rounded-md text-sm text-[#98A2B3] leading-[1.26875rem]"
            name="title"
            id="title"
          >
            <option value="oxygen-concentration">Oxygen Concentration</option>
            <option value="mechanical-ventilator">Mechanical Ventilator</option>
            <option value="patient-monitor">Patient Monitor</option>
            <option value="mechanical-ventilator">Mechanical Ventilator</option>
          </select>
          <select
            className="h-9 border w-[8.7375rem] border-[#D0D5DD] bg-[#F0F2F5] rounded-md text-sm text-[#98A2B3] leading-[1.26875rem]"
            name="title"
            id="title"
          >
            <option value="oxygen-concentration">Blue</option>
            <option value="mechanical-ventilator">NIL</option>
          </select>
          <section className="w-[8.7375rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center border-[#D0D5DD] border justify-between">
            <span className="block">100</span>
            <span className="block w-[2.625rem] h-6">
              <img className="size-full" src={PackIcon} alt="Icon" />
            </span>
          </section>
          <section className="w-[8.7375rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center border-[#D0D5DD] border">
            <span className="block size-5 mr-2">
              <img className="size-full" src={DollarIcon} alt="Icon" />
            </span>
            <span className="block text-sm leading-[1.26875rem]">12.00</span>
          </section>
          <section className="w-[8.7375rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center border-[#D0D5DD] border">
            <span className="block size-5 mr-2">
              <img className="size-full" src={CalendarIcon} alt="Icon" />
            </span>
            <span className="block text-sm leading-[1.26875rem]">
              2023-12-02
            </span>
          </section>
          <section className="w-[12rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center justify-between">
            <span className="block text-sm leading-[1.26875rem] font-bold text-[#344054]">
              $1200.00
            </span>
            <span className="block size-6">
              <img className="size-full" src={BinIcon} alt="Icon" />
            </span>
          </section>
        </section>
        <section className="mt-4 flex justify-between">
          <select
            className="h-9 border w-[9.2375rem] border-[#D0D5DD] bg-[#F0F2F5] rounded-md text-sm text-[#98A2B3] leading-[1.26875rem]"
            name="title"
            id="title"
          >
            <option value="oxygen-concentration">Oxygen Concentration</option>
            <option value="mechanical-ventilator">Mechanical Ventilator</option>
            <option value="patient-monitor">Patient Monitor</option>
            <option value="mechanical-ventilator">Mechanical Ventilator</option>
          </select>
          <select
            className="h-9 border w-[8.7375rem] border-[#D0D5DD] bg-[#F0F2F5] rounded-md text-sm text-[#98A2B3] leading-[1.26875rem]"
            name="title"
            id="title"
          >
            <option value="oxygen-concentration">Blue</option>
            <option value="mechanical-ventilator">NIL</option>
          </select>
          <section className="w-[8.7375rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center border-[#D0D5DD] border justify-between">
            <span className="block">100</span>
            <span className="block w-[2.625rem] h-6">
              <img className="size-full" src={PackIcon} alt="Icon" />
            </span>
          </section>
          <section className="w-[8.7375rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center border-[#D0D5DD] border">
            <span className="block size-5 mr-2">
              <img className="size-full" src={DollarIcon} alt="Icon" />
            </span>
            <span className="block text-sm leading-[1.26875rem]">12.00</span>
          </section>
          <section className="w-[8.7375rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center border-[#D0D5DD] border">
            <span className="block size-5 mr-2">
              <img className="size-full" src={CalendarIcon} alt="Icon" />
            </span>
            <span className="block text-sm leading-[1.26875rem]">
              2023-12-02
            </span>
          </section>
          <section className="w-[12rem] h-9 pl-3 pr-1 py-2 rounded-md flex items-center justify-between">
            <span className="block text-sm leading-[1.26875rem] font-bold text-[#344054]">
              $1200.00
            </span>
            <span className="block size-6">
              <img className="size-full" src={BinIcon} alt="Icon" />
            </span>
          </section>
        </section>
        <section className="my-8 border-[#D0D5DD border-t pt-4">
          <p className="text-[#475367] leading-[1.45rem] flex items-center justify-end">
            <span className="block w-[8rem]">Sub Total</span>
            <span className="block w-[12rem]">$1200.00</span>
          </p>
        </section>
        <section>
          <h1 className="font-bold text-sm leading-[1.45rem] mb-1 text-[#475367]">
            Note
          </h1>
          <textarea
            className="resize-none w-[20.5rem] !h-28 block rounded-md border border-[#D0D5DD] p-4 text-black placeholder:text-[#98A2B3] leading-[1.26875rem] text-sm"
            placeholder="Enter note here"
          />
          <p className="text-right font-medium text-[#667185] w-[20.5rem] text-xs tracking-[-0.5%] mt-2 leading-[1.0875rem]">
            0/20
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsSection;
