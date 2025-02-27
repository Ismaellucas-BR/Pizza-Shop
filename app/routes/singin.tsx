import type { Route } from "./+types/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login | pizza.shop" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function singin() {
  return <div>singin</div>;
}

export default singin;
