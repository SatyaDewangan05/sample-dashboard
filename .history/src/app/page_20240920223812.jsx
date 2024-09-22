import Image from "next/image";
import MiniDrawer from "./components/Drawer";
import { ActionIcon, Indicator, TextInput } from "@mantine/core";
import { Bell, Search } from "lucide-react";
import { IconBellFilled } from "@tabler/icons-react";

export default function Home() {
  return (
    <div className="flex">
      <MiniDrawer />
      <div className="w-full px-12">
        {/* Top Bar */}
        <div className="w-full py-5 flex justify-between">
          <TextInput placeholder="Search" rightSection={<Search size={16} />} />
          <div>
            {/* <ActionIcon
              variant="transparent"
              color="gray"
              // c="black"
              aria-label="Settings"
            > */}
            <Indicator color="#FF5151">
              <IconBellFilled color="gray" />
            </Indicator>
            {/* </ActionIcon> */}
          </div>
        </div>
      </div>
    </div>
  );
}
