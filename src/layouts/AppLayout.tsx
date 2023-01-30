import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <div>Header</div>
      <Outlet />
      <div>Footer</div>
    </>
  );
};

export default AppLayout;
