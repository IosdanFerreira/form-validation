import DesktopSidebar from "@/components/Sidebar";
import React from "react";
import { Separator } from "@/components/ui/separator";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 h-[50px] container">
          ScrapeFlow
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
