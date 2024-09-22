import Image from "next/image";
import MiniDrawer from "./components/Drawer";
import { ActionIcon, Avatar, Indicator, TextInput } from "@mantine/core";
import { Search } from "lucide-react";
import { IconBellFilled } from "@tabler/icons-react";
import TextsmsIcon from "@mui/icons-material/Textsms";
import DP from "@/images/dp.png";

export default function Home() {
  return (
    <div className="flex">
      <MiniDrawer />
      <div className="w-full px-12">
        {/* Top Bar */}
        <div className="w-full py-5 flex justify-between">
          <TextInput placeholder="Search" rightSection={<Search size={16} />} />
          <div className="flex items-center gap-2">
            <ActionIcon
              variant="transparent"
              color="gray"
              // c="black"
              aria-label="Settings"
            >
              <Indicator color="#FF5151" offset={7} withBorder>
                <IconBellFilled color="gray" />
              </Indicator>
            </ActionIcon>
            <ActionIcon
              variant="transparent"
              color="gray"
              // c="black"
              aria-label="Settings"
            >
              <TextsmsIcon color="gray" />
            </ActionIcon>
            <Avatar
              src="https://yt3.ggpht.com/sNTXQbT-tVdQ-D92xTN4iIfRoHPeh2geQRN8QSL-It07X8Zuy4WPhuUTQm9nZ11-MoOh_qbvyg=s48-c-k-c0x00ffffff-no-rj"
              alt="it's me"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
