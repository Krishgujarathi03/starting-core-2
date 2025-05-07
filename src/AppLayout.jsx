import { Outlet } from "react-router-dom";

import Navbar from "./components/CommonComponents/Navbar.jsx";

const AppLayout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Outlet />
    </>
  );
};

export default AppLayout;
