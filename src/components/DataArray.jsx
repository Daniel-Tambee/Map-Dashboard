import dataResponse from "../data/data";
import AppCheckbox from "./AppCheckbox";
import ItemIcon from "../assets/item-icon.svg";

const DataArray = () => {
  const dataArray = dataResponse.map((data, index) => (
    <div
      key={Math.random() * 10000}
      className={`px-6 flex h-[3.3125rem] text-sm text-[#344054] leading-[1.26875rem] border border-[#E4E7EC] border-t-0 ${
        dataResponse.length - 1 === index && "rounded-b-[10px]"
      }`}
    >
      <section className="h-full flex items-center w-[16.1875rem]">
        <AppCheckbox />
        <section className="flex items-center gap-3">
          <span className="block size-10">
            <img className="size-full object-cover" src={ItemIcon} alt="Icon" />
          </span>
          <span>
            <span className="block font-medium text-xs text-[#101928] h-5 overflow-hidden">
              {data.title}
            </span>
            <span className=" text-[#475367]">#28373</span>
          </span>
        </section>
      </section>
      <section className="h-full flex items-center w-[10.1875rem]">
        {data.variant}
      </section>
      <section className="h-full flex items-center w-[10.1875rem]">
        {data.quantity}
      </section>
      <section className="h-full flex items-center w-[10.6875rem]">
        ${data.price}
      </section>
      <section className="h-full flex items-center w-[8.1875rem]">
        ${data.amount}
      </section>
      <section className="h-full flex items-center w-[11.25rem]">
        2024-08-07
      </section>
    </div>
  ));

  return dataArray;
};

export default DataArray;
