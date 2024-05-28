import { Outlet } from "react-router-dom";
import Header from "./Header";
import "./Layout.css";
import StockSlider from "./StockSlider";

const Layout = () => {
  return (
    <section>
      <StockSlider />
      <Header />
      <main className="p-4 overflow-auto main-content">
        <Outlet />
      </main>
    </section>
  );
};

export default Layout;
