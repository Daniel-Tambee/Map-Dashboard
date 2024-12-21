import { useContext } from "react";
import AppContext from "../context/AppContext";
import BackArrow from "../assets/header-back-arrow.svg";
import HeaderSearchBar from "./HeaderSearchBar";
import HeaderNotificationSection from "./HeaderNotificationSection";

const Header = () => {
  const { setCurrentPage } = useContext(AppContext);

  return (
    <header>
      <nav className="px-8 h-16 flex justify-between items-center border-b bottom-[#667185] z-10 fixed w-[calc(100%-17rem)] bg-white">
        <div className="w-[3.75rem] h-5 relative right-[0.45375rem]">
          <img
            className="size-full cursor-pointer"
            src={BackArrow}
            alt="Caret Left"
            onClick={() => {
              setCurrentPage(prevState => {
                if (prevState > 1) {
                  return prevState - 1;
                } else {
                  return 1;
                }
              });
            }}
          />
        </div>
        <div className="flex items-center gap-10">
          <HeaderSearchBar />
          <HeaderNotificationSection />
        </div>
      </nav>
    </header>
  );
};

export default Header;
