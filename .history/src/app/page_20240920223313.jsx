import Image from "next/image";
import MiniDrawer from "./components/Drawer";
import { ActionIcon, Indicator, TextInput } from "@mantine/core";
import { Bell, Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex">
      <MiniDrawer />
      <div className="px-12">
        {/* Top Bar */}
        <div className="py-5">
          <TextInput placeholder="Search" rightSection={<Search size={16} />} />
          <div>
            <ActionIcon
              variant="light"
              color="gray"
              // c="black"
              aria-label="Settings"
            >
              <Bell c="black" />
            </ActionIcon>
            <Indicator></Indicator>
          </div>
        </div>
      </div>
    </div>
  );
}
