"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React, { startTransition, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputPassword from "@/components/InputPassword";
import Link from "next/link";
import { loginUserAction } from "../actions/loginUser.action";
import { useForm } from "react-hook-form";
import { useFormState } from "react-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function LoginForm() {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^a-zA-Z0-9]).{8,}$/;

  const formSchema = z.object({
    email: z.string().email({ message: "Insira um email valido" }),

    password: z.string().regex(passwordRegex, {
      message:
        "A senha deve conter 8 caracteres, pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial",
    }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [state, formAction] = useFormState(loginUserAction, {
    success: false,
    message: "",
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    startTransition(async () => {
      const result = await loginUserAction(formData);

      if (!result.success) {
        // Se houver um erro, mostramos o diálogo de erro
        setIsDialogOpen(true);
        setIsDialogOpen(true); // Abre o diálogo
        return;
      }

      // Caso contrário, você pode redirecionar ou fazer outra ação
      console.log(result);
    });
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Email */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => {
              const showError =
                form.formState.errors.email && form.formState.isSubmitted;

              return (
                <FormItem>
                  <FormLabel className={showError ? "text-destructive" : ""}>
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Insira seu email"
                      className={showError ? "text-destructive" : ""}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.isSubmitted && <FormMessage />}
                </FormItem>
              );
            }}
          />

          {/* Senha */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => {
              const showError =
                form.formState.errors.password && form.formState.isSubmitted;

              return (
                <FormItem>
                  <FormLabel className={showError ? "text-destructive" : ""}>
                    Senha
                  </FormLabel>
                  <FormControl>
                    <InputPassword
                      placeholder="Insira sua senha"
                      className={showError ? "text-destructive" : ""}
                      {...field}
                    />
                  </FormControl>
                  {form.formState.isSubmitted && <FormMessage />}
                </FormItem>
              );
            }}
          />

          {isDialogOpen && (
            <AlertDialog>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>
                    Ocorreu um erro inesperado
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    {state.message}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Fechar</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}

          <div className="flex items-center justify-end gap-1 my-8">
            <Link
              className="text-primary font-semibold hover:underline"
              href="/cadastro"
            >
              Esqueceu sua senha?
            </Link>
          </div>

          <Button type="submit" className="w-full cursor-pointer text-md">
            Entrar
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default LoginForm;
