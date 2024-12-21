import SearchIcon from "../assets/search-icon.svg";

const HeaderSearchBar = () => {
  return (
    <div className="w-[28.125rem] h-10 border border-[#E4E7EC] rounded-md py-2.5 px-3 flex gap-2">
      <section className="size-5">
        <img className="size-full" src={SearchIcon} alt="Search Icon" />
      </section>
      <section className="h-full w-[calc(100%-1.25rem)]">
        <input
          className="size-full block text-[#667185] text-sm leading-[1.26875rem]"
          type="text"
          placeholder="Search here..."
        />
      </section>
    </div>
  );
};

export default HeaderSearchBar;
