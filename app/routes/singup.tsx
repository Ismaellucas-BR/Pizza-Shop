import { useForm } from "react-hook-form";
import { z } from "zod";

import { Label } from "~/components/ui/label";
import type { Route } from "./+types/home";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Cadastro | pizza.shop" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const singUpForm = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
});

type singUpForm = z.infer<typeof singUpForm>;

function singUp() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<singUpForm>();

  async function handlesingUp(data: singUpForm) {
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success("Restaurante cadastrado ccom sucesso!", {
        action: {
          label: "Login",
          onClick: () => navigate("/singin"),
        },
      });
    } catch (error) {
      toast.error("Erro ao cadastrar restaurante.");
    }
  }
  return (
    <div className="p-8">
      <Button variant="ghost" asChild className="absolute top-8 right-8">
        <Link to="/singin">Fazer login</Link>
      </Button>
      <div className="flex w-[350px] flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Criar conta grátis
          </h1>
          <p className="text-muted-foreground text-sm">
            Seja um parceiro e comece suas vendas!
          </p>
        </div>
        <form className="space-y-4" onSubmit={handleSubmit(handlesingUp)}>
          <div className="space-y-2">
            <Label htmlFor="restaurantName text-pink-500">
              Nome do estabelecimento
            </Label>
            <Input
              id="restaurantName"
              type="text"
              {...register("restaurantName")}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="managerName text-pink-500">Seu nome</Label>
            <Input id="managerName" type="text" {...register("managerName")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email text-pink-500">Seu e-mail</Label>
            <Input id="email" type="email" {...register("email")} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone text-pink-500">Seu celular</Label>
            <Input id="phone" type="tel" {...register("phone")} />
          </div>
          <Button
            className="bg-primary w-full"
            type="submit"
            disabled={isSubmitting}
          >
            Finalizar cadastro
          </Button>
          <p className="text-muted-foreground px-6 text-center text-sm leading-relaxed">
            Ao continuar, você concorda com os nossos{" "}
            <a href="" className="underline underline-offset-4">
              Termos de serviço
            </a>{" "}
            e{" "}
            <a href="" className="underline underline-offset-4">
              política de privacidade
            </a>
            .
          </p>
        </form>
      </div>
    </div>
  );
}

export default singUp;
