import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Headset, LogOut, Settings } from "lucide-react";

import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import DesktopSidebar from "@/components/Sidebar";
import React from "react";
import { Separator } from "@/components/ui/separator";
import { ThemeModeToggle } from "@/components/ThemeModeToggle";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          <BreadcrumbHeader />
          <div className="flex items-center space-x-3">
            <ThemeModeToggle />

            <DropdownMenu>
              <DropdownMenuTrigger asChild className="cursor-pointer">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Minha conta</DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Settings />
                  Configurações
                </DropdownMenuItem>

                <DropdownMenuItem>
                  <Headset />
                  Suporte
                </DropdownMenuItem>

                <DropdownMenuSeparator />

                <DropdownMenuItem>
                  <LogOut />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <Separator />
        <div className="overflow-auto px-6">
          <div className="flex-1 py-2 text-accent-foreground container"></div>
          {children}
        </div>
      </div>
    </div>
  );
}

export default layout;
