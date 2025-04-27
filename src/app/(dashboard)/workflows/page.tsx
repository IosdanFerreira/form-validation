import React, { Suspense } from "react";

import CreateWorkflowDialog from "./components/CreateWorkflowDialog";
import UserWorkflows from "./components/UserWorkflows";
import UserWorkflowsSkeleton from "./components/UserWorkflowsSkeleton";

function WorkflowsPage() {
  return (
    <div className="flex-1 flex flex-col h-full">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold">Fluxos de trabalho</h1>
          <p className="text-muted-foreground">
            Gerencie seus fluxos de trabalho
          </p>
        </div>

        <CreateWorkflowDialog triggerText="Criar fluxo" />
      </div>

      <div className="h-full py-6">
        <Suspense fallback={<UserWorkflowsSkeleton />}>
          <UserWorkflows />
        </Suspense>
      </div>
    </div>
  );
}

export default WorkflowsPage;
