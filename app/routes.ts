import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./pages/_layouts/app.tsx", [
    index("./routes/home.tsx"),
    route("/orders", "./routes/orders.tsx"),
  ]),
  layout("./pages/_layouts/auth.tsx", [
    route("/singin", "./routes/singin.tsx"),
    route("/singup", "./routes/singup.tsx"),
  ]),
] satisfies RouteConfig;
