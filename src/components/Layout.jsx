import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <Header />
      <div className="mt-8 px-4">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
