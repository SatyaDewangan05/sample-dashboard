import Image from "next/image";
import MiniDrawer from "./components/Drawer";
import {
  ActionIcon,
  Anchor,
  Avatar,
  Divider,
  Indicator,
  TextInput,
  Title,
} from "@mantine/core";
import { Search } from "lucide-react";
import {
  IconBellFilled,
  IconChevronCompactDown,
  IconChevronDown,
} from "@tabler/icons-react";
import TextsmsIcon from "@mui/icons-material/Textsms";
import DP from "@/images/dp.png";
import ThreeData from "./components/card/ThreeData";
import DetailChart from "./components/card/DetailChart";

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
        <Divider />

        <div className="w-full py-5">
          <p className="text-2xl font-medium text-[#161E54]">Dashboard</p>
          <div className="py-3 flex flex-col gap-3">
            <div className="grid grid-cols-3 gap-3">
              <ThreeData
                heading="Available Position"
                figure={24}
                text="4 Urgently needed"
                bgColor="#FFEFE7"
                textColor="#FF5151"
              />
              <ThreeData
                heading="Job Open"
                figure={10}
                text="4 Active hiring"
                bgColor="#E8F0FB"
                textColor="#3786F1"
              />
              <ThreeData
                heading="New Employees"
                figure={24}
                text="4 Department"
                bgColor="#FDEBF9"
                textColor="#EE61CF"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <DetailChart
                heading="Total Employees"
                figure={216}
                texts={["4120 Men", "96 Women"]}
                variation="+2%"
              />
              <DetailChart
                heading="Talent Request"
                figure={16}
                texts={["6 Men", "10 Women"]}
                variation="+5%"
              />
            </div>

            <div className="p-3 rounded-xl">
              <div>
                <p className="text-lg">Announcement</p>
                <div>
                  Today, 13 Sep 2021 <IconChevronDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
