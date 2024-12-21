import BellIcon from "../assets/bell-icon.svg";
import ChatIcon from "../assets/chat-icon.svg";
import AvatarIcon from "../assets/avatar-icon.svg";
import CaretDownIcon from "../assets/caret-down.svg";

const HeaderNotificationSection = () => {
  return (
    <div className="flex items-center gap-4">
      <section className="size-8">
        <img className="size-full cursor-pointer" src={BellIcon} alt="Icon" />
      </section>
      <section className="size-8">
        <img className="size-full cursor-pointer" src={ChatIcon} alt="Icon" />
      </section>
      <section className="flex items-center gap-2">
        <section className="size-8">
          <img
            className="size-full cursor-pointer"
            src={AvatarIcon}
            alt="Icon"
          />
        </section>
        <section className="size-[1.125rem] py-[0.328125rem] px-[0.1175rem]">
          <img
            className="size-full cursor-pointer"
            src={CaretDownIcon}
            alt="Icon"
          />
        </section>
      </section>
    </div>
  );
};

export default HeaderNotificationSection;
