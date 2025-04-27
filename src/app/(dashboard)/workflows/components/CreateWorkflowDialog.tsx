"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import CustomDialogHeader from "@/components/CustomDialogHeader";
import { Input } from "@/components/ui/input";
import { Layers2Icon } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { createWorkflowSchema } from "../schema/workflow.schema";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

function CreateWorkflowDialog({ triggerText }: { triggerText?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  const form = useForm<z.infer<typeof createWorkflowSchema>>({
    resolver: zodResolver(createWorkflowSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  async function onSubmit(values: z.infer<typeof createWorkflowSchema>) {
    console.log(values);
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>{triggerText ?? "Criar novo fluxo"}</Button>
      </DialogTrigger>
      <DialogContent aria-describedby={undefined}>
        <CustomDialogHeader
          icon={Layers2Icon}
          title="Criar novo fluxo"
          subTitle="Crie um fluxo de trabalho para gerenciar suas tarefas"
        />

        <div className="py-6">
          <Form {...form}>
            <form
              className="space-y-8 w-full"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Nome
                      <p className="text-xs text-destructive">(Obrigatório)</p>
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormDescription>
                      Escolha um nome descritivo e único
                    </FormDescription>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Descrição
                      <p className="text-xs text-muted-foreground">
                        (Opcional)
                      </p>
                    </FormLabel>
                    <FormControl>
                      <Textarea rows={3} {...field} />
                    </FormControl>
                    <FormDescription>
                      Escolha um nome descritivo e único
                    </FormDescription>
                  </FormItem>
                )}
              />
              <FormDescription>
                Escreva uma breve descrição sobre o que o fluxo faz.
                <br />
                Isso é opcional, mas pode te ajudar a lembrar o propósito de
                criação do fluxo
              </FormDescription>

              <Button type="submit" className="w-full">
                Criar fluxo
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CreateWorkflowDialog;
