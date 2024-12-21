import SideBarNavigationItems from "./SideBarNavigationItems";
import CaretDown from "../assets/caret-down.svg";
import NotificationCount from "../assets/notification-count.svg";
import DashboardIcon from "../assets/dashboard-icon.svg";
import CalendarIcon from "../assets/calendar-icon.svg";
import CommunicationIcon from "../assets/communication.icon.svg";
import ContractIcon from "../assets/contract-icon.svg";
import InventoryIcon from "../assets/inventory-icon.svg";
import ProcurementIcon from "../assets/procurement-icon.svg";
import FinanceIcon from "../assets/finance-icon.svg";
import { useState } from "react";

const SideBarTopNavigation = () => {
  const [clickedNavigation, setClickedNavigation] = useState([
    "Procurement",
    "Quotes",
  ]);
  return (
    <ul className="px-2 mb-[rem]">
      <SideBarNavigationItems
        clickedNavigation={clickedNavigation}
        setClickedNavigation={setClickedNavigation}
        text="Dashboard"
        image={DashboardIcon}
      />
      <SideBarNavigationItems
        clickedNavigation={clickedNavigation}
        setClickedNavigation={setClickedNavigation}
        text="Inventory"
        image={InventoryIcon}
      />
      <SideBarNavigationItems
        clickedNavigation={clickedNavigation}
        setClickedNavigation={setClickedNavigation}
        text="Procurement"
        image={ProcurementIcon}
        info={CaretDown}
        caret={true}
      />
      {Array.isArray(clickedNavigation) &&
        clickedNavigation.some(navigation =>
          ["Procurement", "Quotes", "Orders"].includes(navigation)
        ) && (
          <ul className="mt-2">
            <SideBarNavigationItems
              clickedNavigation={clickedNavigation}
              setClickedNavigation={setClickedNavigation}
              text="Quotes"
            />
            <SideBarNavigationItems
              clickedNavigation={clickedNavigation}
              setClickedNavigation={setClickedNavigation}
              text="Orders"
            />
          </ul>
        )}
      <SideBarNavigationItems
        clickedNavigation={clickedNavigation}
        setClickedNavigation={setClickedNavigation}
        text="Finance"
        image={FinanceIcon}
        info={CaretDown}
        caret={true}
      />
      <SideBarNavigationItems
        clickedNavigation={clickedNavigation}
        setClickedNavigation={setClickedNavigation}
        text="Communication"
        image={CommunicationIcon}
        info={NotificationCount}
      />
      <SideBarNavigationItems
        clickedNavigation={clickedNavigation}
        setClickedNavigation={setClickedNavigation}
        text="Calendar"
        image={CalendarIcon}
        info={NotificationCount}
      />
      <SideBarNavigationItems
        clickedNavigation={clickedNavigation}
        setClickedNavigation={setClickedNavigation}
        text="Contracts"
        image={ContractIcon}
      />
    </ul>
  );
};

export default SideBarTopNavigation;
