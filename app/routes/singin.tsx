import React from "react";
import { Label } from "~/components/ui/label";
import type { Route } from "./+types/home";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login | pizza.shop" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

function singin() {
  return (
    <div className="p-8">
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-muted-foreground text-sm">
            Acompanhe suas vendas pelo painel do parceiro!
          </p>
        </div>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email text-pink-500">Seu e-mail</Label>
            <Input id="email" type="email" />
          </div>
          <Button className="bg-primary w-full" type="submit">
            Acessar painel
          </Button>
        </form>
      </div>
    </div>
  );
}

export default singin;
