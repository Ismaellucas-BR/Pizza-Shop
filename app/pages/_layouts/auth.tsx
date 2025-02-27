import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div>
      <h2>Autenticação</h2>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
