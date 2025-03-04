import MonthOrdersAmountCard from "~/components/dashboard/MonthOrdersAmountCard";
import type { Route } from "./+types/home";
import MonthRevenueCard from "~/components/dashboard/MonthRevenueCard";
import DayOrdrsAmountCard from "~/components/dashboard/DayOrdrsAmountCard";
import MonthCanceledOrdersAmountCard from "~/components/dashboard/MonthCanceledOrdersAmountCard";
import RevenueChart from "~/components/dashboard/RevenueChart";
import PopularProductsChart from "~/components/dashboard/popularProductsChart";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard | pizza.shop" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid grid-cols-4 gap-4">
        <MonthRevenueCard />
        <MonthOrdersAmountCard />
        <DayOrdrsAmountCard />
        <MonthCanceledOrdersAmountCard />
      </div>
      <div className="grid grid-cols-9 gap-4">
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </div>
  );
}
