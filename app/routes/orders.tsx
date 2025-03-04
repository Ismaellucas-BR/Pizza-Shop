import type { Route } from "./+types/orders";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import OrderTableRow from "~/components/orders/TableRow";
import OrderTableFilter from "~/components/orders/OrderTableFilter";
import Pagination from "~/components/orders/Pagination";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Pedidos | pizza.shop" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function orders() {
  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        <div className="space-y-2.5">
          <OrderTableFilter />
          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[4rem]"></TableHead>
                  <TableHead className="w-[8.75rem]">Identificador</TableHead>
                  <TableHead className="w-[11.25rem]">
                    Realizado há<h1></h1>
                  </TableHead>
                  <TableHead className="w-[8.75rem]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[8.75rem]">Total do pedido</TableHead>
                  <TableHead className="w-[10.25rem]"></TableHead>
                  <TableHead className="w-[8.25rem]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 10 }).map((_, i) => {
                  return <OrderTableRow key={i} />;
                })}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  );
}
