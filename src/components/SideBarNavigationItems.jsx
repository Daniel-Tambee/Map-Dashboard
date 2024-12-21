const SideBarNavigationItems = props => {
  return (
    <li
      className={`${
        props.clickedNavigation.includes(props.text) && "bg-[#E3EAFB]"
      } py-3 px-4 flex justify-between items-center rounded transition-[all_0.35s_ease-in-out]`}
      onClick={() => {
        if (["Quotes", "Orders", "Procurement"].includes(props.text)) {
          props.text === "Procurement"
            ? props.setClickedNavigation(["Procurement", "Quotes"])
            : props.setClickedNavigation(["Procurement", props.text]);
        } else {
          props.setClickedNavigation(props.text);
        }
      }}
    >
      <div className="flex gap-[0.88rem]">
        <section className="size-5">
          {props.image && (
            <img
              className="size-full object-cover cursor-pointer"
              src={props.image}
              alt="Icon"
            />
          )}
        </section>
        <p className="text-sm leading-[1.26875rem] text-[#344054] cursor-pointer">
          {props.text}
        </p>
      </div>
      <div>
        {props.info && (
          <section
            className={`${
              props.caret ? "size-5" : "h-[1.0625rem] w-[1.875rem]"
            }`}
          >
            <img
              className={`size-full ${
                props.caret &&
                "py-[0.416875rem] px-[0.260625] cursor-pointer transition-[all_0.35s_ease-in-out]"
              } ${!props.caret && "object-cover"} ${
                props.caret && props.clickedNavigation === props.text
                  ? "rotate-180"
                  : ""
              }`}
              src={props.info}
              alt="Icon"
            />
          </section>
        )}
      </div>
    </li>
  );
};

export default SideBarNavigationItems;
