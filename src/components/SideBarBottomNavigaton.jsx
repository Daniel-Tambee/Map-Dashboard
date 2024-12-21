import Image from "../assets/bottom-sidebar-navigation.svg";

const SideBarBottomNavigation = () => {
  return (
    <ul className="fixed bottom-0">
      <img className="size-full" src={Image} alt="Icon" />
    </ul>
  );
};

export default SideBarBottomNavigation;
