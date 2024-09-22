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
            <Indicator>
              <ActionIcon variant="filled" aria-label="Settings">
                <Bell stroke={1.5} />
              </ActionIcon>
            </Indicator>
          </div>
        </div>
      </div>
    </div>
  );
}
