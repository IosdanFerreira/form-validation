import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, InboxIcon } from "lucide-react";

import CreateWorkflowDialog from "./CreateWorkflowDialog";
import React from "react";

function UserWorkflows() {
  const workflows: any = [];

  if (!workflows) {
    return (
      <Alert variant="destructive">
        <AlertCircle className="w-4 h-4" />
        <AlertTitle>Erro</AlertTitle>
        <AlertDescription>
          Algo deu errado! Por favor, tente novamente em alguns instantes
        </AlertDescription>
      </Alert>
    );
  }

  if (workflows.length === 0) {
    return (
      <div className="flex flex-col gap-4 h-full items-center justify-center">
        <div className="rounded-full bg-accent w-20 h-20 flex items-center justify-center">
          <InboxIcon size={40} className="stroke-primary" />
        </div>

        <div className="flex flex-col gap-1 text-center">
          <p className="font-bold">Nenhum fluxo de trabalho criado</p>
          <p className="text-muted-foreground text-sm">
            Clique no botão abaixo para criar um novo fluxo de trabalho
          </p>
        </div>

        <CreateWorkflowDialog triggerText="Crie seu primeiro fluxo" />
      </div>
    );
  }
}

export default UserWorkflows;
