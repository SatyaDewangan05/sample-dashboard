import Image from "next/image";
import MiniDrawer from "./components/Drawer";
import {
  ActionIcon,
  Anchor,
  Avatar,
  Indicator,
  TextInput,
} from "@mantine/core";
import { Search } from "lucide-react";
import {
  IconBellFilled,
  IconChevronCompactDown,
  IconChevronDown,
} from "@tabler/icons-react";
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
          <div className="flex items-center gap-5">
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
            <div className="flex gap-2 items-center">
              <Image src={DP} />
              <Anchor
                href="https://mantine.dev/"
                target="_blank"
                underline="never"
                c="#161E54"
              >
                <div className="flex items-center">
                  Admirra John
                  <IconChevronDown />
                </div>
              </Anchor>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
