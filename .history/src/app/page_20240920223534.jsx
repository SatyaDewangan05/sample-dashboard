import Image from "next/image";
import MiniDrawer from "./components/Drawer";
import { ActionIcon, Indicator, TextInput } from "@mantine/core";
import { Bell, Search } from "lucide-react";
import { IconBellFilled } from "@tabler/icons-react";

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
              variant="transparent"
              color="gray"
              // c="black"
              aria-label="Settings"
            >
              <IconBellFilled />
            </ActionIcon>
            <Indicator></Indicator>
          </div>
        </div>
      </div>
    </div>
  );
}
