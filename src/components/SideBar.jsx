import Logo from "../assets/dashboard-logo.svg";
import SideBarTopNavigation from "./SideBarTopNavigation";
import SideBarBottomNavigation from "./SideBarBottomNavigaton";

const SideBar = () => {
  return (
    <div className="w-[17rem] h-screen bg-[#F7F9FC] pt-6 pb-6">
      <div className="center mb-5">
        <section className="w-[14rem] h-10">
          <img
            className="size-full cursor-pointer"
            src={Logo}
            alt="Dashboard Logo"
            onClick={() => (window.location.href = "/")}
          />
        </section>
      </div>
      <SideBarTopNavigation />
      <SideBarBottomNavigation />
    </div>
  );
};

export default SideBar;
