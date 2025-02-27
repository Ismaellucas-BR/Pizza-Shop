import { Outlet } from "react-router";
function AppLayout() {
  return (
    <div>
      <h2>cabeçalho</h2>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
