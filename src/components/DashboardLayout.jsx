import { useState } from "react";
import AppContext from "../context/AppContext";
import SideBar from "./SideBar";
import Modal from "./Modal";
import MainLayout from "./MainLayout";
import Quote from "./Quote";

const DashboardLayout = () => {
  const [dashboardInfoUI, setDashboardInfoUI] = useState(<Quote />),
    [showModal, setShowModal] = useState(false),
    [currentPage, setCurrentPage] = useState(1);

  return (
    <AppContext.Provider
      value={{
        dashboardInfoUI,
        setDashboardInfoUI,
        showModal,
        setShowModal,
        currentPage,
        setCurrentPage,
      }}
    >
      {showModal && <Modal />}
      <div className="flex">
        <SideBar />
        <MainLayout />
      </div>
    </AppContext.Provider>
  );
};

export default DashboardLayout;
