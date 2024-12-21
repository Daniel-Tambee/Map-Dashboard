import AppCheckbox from "./AppCheckbox";
import DataArray from "./DataArray";
import FileIcon from "../assets/file-icon.svg";
import CaretDown from "../assets/caret-down.svg";

const QuoteItems = () => {
  return (
    <>
      <div className="border border-[#E4E7EC] rounded-lg py-4 px-6">
        <h1 className="text-[#1D2739] font-bold text-xl leading-[1.5rem] tracking-[-2%] mb-8">
          Item(s)
        </h1>
        <div className="px-6 bg-[#F9FAFB] flex h-11 text-[#344054] text-xs leading-[1.0125rem] rounded-t-[10px] border border-[#E4E7EC]">
          <section className="h-full flex items-center w-[16.1875rem]">
            <AppCheckbox />
            <span className="block">Items</span>
          </section>
          <section className="h-full flex items-center w-[10.1875rem]">
            Variants
          </section>
          <section className="h-full flex items-center w-[10.1875rem]">
            Quantity
          </section>
          <section className="h-full flex items-center w-[10.6875rem]">
            Price
          </section>
          <section className="h-full flex items-center w-[8.1875rem]">
            Amount
          </section>
          <section className="h-full flex items-center w-[11.25rem]">
            Expected Delivery Date
          </section>
        </div>
        <DataArray />
        <section className="mt-6 flex justify-end pr-6">
          <section className="" />
          <section className="text-[#475367] leading-[1.45rem]">
            <section className="mb-4 flex justify-end">
              <p className="w-[8.4vw]">Sub Total</p>
              <p className="w-[11.45vw]">$8,000.00</p>
            </section>
            <section className="flex justify-end">
              <p className="w-[8.4vw]">Total</p>
              <p className="w-[11.45vw] font-bold">$8,750.00</p>
            </section>
          </section>
        </section>
      </div>
      <section className="border border-[#E4E7EC] rounded-lg p-6 mt-6 flex justify-between items-center">
        <section className="flex gap-4">
          <section className="size-8">
            <img className="size-full" src={FileIcon} alt="Icon" />
          </section>
          <section>
            <h1 className="font-bold text-[1.25rem] leading-[1.5rem] tracking-[-2%] text-[#1D2739]">
              Terms and Attachments
            </h1>
            <p className="text-sm leading-[1.2697rem] text-[#475367]">
              Review payment and delievery terms
            </p>
          </section>
        </section>
        <section className="size-6 p-1">
          <img className="size-full" src={CaretDown} alt="Icon" />
        </section>
      </section>
    </>
  );
};

export default QuoteItems;
