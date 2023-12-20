import { Outlet } from "react-router-dom";
import NavBar from "../Components/MainLayout/NavBar";

function RootLayout() {
  return (
    <div style={{ display: "flex" }}>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
