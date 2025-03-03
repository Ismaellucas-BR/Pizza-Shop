import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router";

import { Label } from "~/components/ui/label";
import type { Route } from "./+types/home";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { toast } from "sonner";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login | pizza.shop" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const singInForm = z.object({
  email: z.string().email(),
});

type singInForm = z.infer<typeof singInForm>;

function singin() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<singInForm>();

  async function handleSingin(data: singInForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Enviamos um link de autenticação para o seu e-mail.", {
        action: {
          label: "Reenviar",
          onClick: () => handleSingin(data),
        },
      });
    } catch (error) {
      toast.error("Credenciais inválidas.");
    }
  }
  return (
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute top-8 right-8">
        <Link to="/singup">Novo estabelecimento</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Acessar painel
          </h1>
          <p className="text-muted-foreground text-sm">
            Acompanhe suas vendas pelo painel do parceiro!
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(handleSingin)}>
          <div className="space-y-2">
            <Label htmlFor="email text-pink-500">Seu e-mail</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>
          <Button
            className="bg-primary w-full"
            type="submit"
            disabled={isSubmitting}
          >
            Acessar painel
          </Button>
        </form>
      </div>
    </div>
  );
}

export default singin;
