"use client";

import { DialogHeader } from "./ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ICustomDialogHeaderProps {
  title?: string;
  subTitle?: string;
  icon?: LucideIcon;

  iconClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
}

function CustomDialogHeader(props: ICustomDialogHeaderProps) {
  return (
    <DialogHeader className="py-6">
      <DialogTitle asChild>
        <div className="flex flex-col items-center gap-2 mb-2">
          {props.icon && (
            <props.icon
              className={cn("stroke-primary", props.iconClassName)}
              size={30}
            />
          )}

          {props.title && <p className="text-xl text-primary">{props.title}</p>}

          {props.subTitle && (
            <p className="text-sm text-muted-foreground">{props.subTitle}</p>
          )}
        </div>
      </DialogTitle>
    </DialogHeader>
  );
}

export default CustomDialogHeader;
