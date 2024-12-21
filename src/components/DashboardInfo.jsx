import { useContext } from "react";
import AppContext from "../context/AppContext";

const DashboardInfo = () => {
  const { dashboardInfoUI } = useContext(AppContext);

  return <main className="px-8 py-6 pt-24">{dashboardInfoUI}</main>;
};

export default DashboardInfo;
