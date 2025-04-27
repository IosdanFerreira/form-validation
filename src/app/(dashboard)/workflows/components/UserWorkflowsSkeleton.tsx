import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

function UserWorkflowsSkeleton() {
  const skeletonRows = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="space-y-2">
      {skeletonRows.map((row) => (
        <Skeleton
          key={row}
          className="h-6 w-full animate-pulse rounded-md bg-gray-200"
        />
      ))}
    </div>
  );
}

export default UserWorkflowsSkeleton;
