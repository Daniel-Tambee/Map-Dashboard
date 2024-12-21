import Header from "./Header";
import DashboardInfo from "./DashboardInfo";

const MainLayout = () => {
  return (
    <div className="w-[calc(100vw-17rem)] h-screen overflow-y-auto main-layout">
      <Header />
      <DashboardInfo />
    </div>
  );
};

export default MainLayout;
