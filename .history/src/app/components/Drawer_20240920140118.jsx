"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Home, Settings, Users, Menu } from "lucide-react";

export default function Component() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const menuItems = [
    { icon: <Home className="h-5 w-5" />, label: "Home" },
    { icon: <Users className="h-5 w-5" />, label: "Users" },
    { icon: <Settings className="h-5 w-5" />, label: "Settings" },
  ];

  const DrawerContent = ({ isMobile }: { isMobile: boolean }) => (
    <div className="flex h-full flex-col justify-between py-4">
      <nav className="space-y-2">
        {menuItems.map((item, index) => (
          <Button key={index} variant="ghost" className="w-full justify-start">
            {item.icon}
            <span
              className={`ml-2 ${
                isMobile ? "" : "hidden md:hidden lg:inline-block"
              }`}
            >
              {item.label}
            </span>
          </Button>
        ))}
      </nav>
    </div>
  );

  return (
    <div className="h-screen flex">
      {isMobile ? (
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed top-4 left-4 z-50"
            >
              <Menu className="h-4 w-4" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64">
            <DrawerContent isMobile={true} />
          </SheetContent>
        </Sheet>
      ) : (
        <div className="bg-background border-r w-16 lg:w-64 transition-all duration-300">
          <DrawerContent isMobile={false} />
        </div>
      )}
      <main className="flex-1 p-4">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p>Your main content goes here.</p>
      </main>
    </div>
  );
}
