"use client";

import Image from "next/image";
import MiniDrawer from "./components/Drawer";
import {
  ActionIcon,
  Anchor,
  Avatar,
  Button,
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
  IconDots,
  IconMenu2,
  IconPinFilled,
} from "@tabler/icons-react";
import TextsmsIcon from "@mui/icons-material/Textsms";
import DP from "@/images/dp.png";
import ThreeData from "./components/card/ThreeData";
import DetailChart from "./components/card/DetailChart";
import Event from "./components/card/Event";
import { useEffect, useState } from "react";
import MobileDrawer from "./components/MobileDrawer";

export default function Home() {
  const [open, setOpen] = useState(true);
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 834) {
        if (window.innerWidth < 390) {
          setMobile(true);
        } else setMobile(false);
        setOpen(false);
      } else {
        setOpen(true);
        setMobile(false);
      }
    };

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size

    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex">
      <div className="hidden xs:inline">
        <MiniDrawer open={open} setOpen={setOpen} />
      </div>
      {mobile ? (
        <div className="inline xs:hidden">
          <MobileDrawer open={open} setOpen={setOpen} />
        </div>
      ) : null}
      <div className="w-full px-6 xs:px-12">
        {/* Top Bar */}
        <div className="w-full py-5 flex justify-between relative">
          <div className="hidden xs:inline">
            <div className="h-24 w-24 lg:hidden absolute -left-9 top-6 z-10 ">
              <IconMenu2
                className="hover:opacity-70 hover:cursor-pointer"
                onClick={() => setOpen((prevState) => !prevState)}
              />
            </div>
            <TextInput
              placeholder="Search"
              rightSection={<Search size={16} />}
            />
          </div>
          <div className="inline-flex gap-5 items-center xs:hidden">
            <IconMenu2
              color="gray"
              size={24}
              className="hover:opacity-70 hover:cursor-pointer"
              onClick={() => setOpen((prevState) => !prevState)}
            />
            <Search
              color="gray"
              size={20}
              className="hover:opacity-70 hover:cursor-pointer"
            />
          </div>

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
                  <p className="hidden lg:inline">Admirra John</p>
                  <IconChevronDown />
                </div>
              </Anchor>
            </div>
          </div>
        </div>

        <Divider />

        <div className="w-full py-5">
          <p className="text-2xl font-medium text-[#161E54]">Dashboard</p>
          <div className="py-3 grid grid-cols-1 lg:grid-cols-5 gap-5 lg:gap-8">
            {/* Left Section */}
            <div className="lg:col-span-3 flex flex-col gap-5">
              <div className="grid grid-cols-1 xs:grid-cols-3 gap-3">
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
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
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

              {/* Announcement */}
              <div className="rounded-[10px] border border-gray-300">
                <div className="p-3 flex justify-between items-center">
                  <p className="text-lg font-medium text-[#161E54]">
                    Announcement
                  </p>
                  <div className="px-2 py-1 rounded-md border border-gray-200 flex items-center gap-2 text-gray-500">
                    <p>Today, 13 Sep 2021</p>
                    <IconChevronDown />
                  </div>
                </div>
                <div className="p-3 flex flex-col gap-3">
                  <Event
                    text="Outing schedule for every departement"
                    lastUpdate="5 Minutes age"
                    pin={true}
                    prePinned={true}
                  />
                  <Event
                    text="Meeting HR Department"
                    lastUpdate="Yesterday, 12:30 PM"
                    pin={true}
                  />
                  <Event
                    text="IT Department need two more talents for UX/UI Designer position"
                    lastUpdate="Yesterday, 09:15 AM"
                    pin={true}
                  />
                </div>
                <Divider color="#d1d5db" />
                <div className="p-3 text-[#FF5151] text-center hover:text-opacity-60 hover:cursor-pointer">
                  {" "}
                  See All Announcement
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:col-span-2 flex flex-col xs:flex-row lg:flex-col gap-3 items-start">
              <div className="rounded-[10px] overflow-hidden text-white">
                <p className="px-5 py-3 text-lg font-medium bg-[#1B204A]">
                  Recent Activity
                </p>
                <div className="p-5 bg-[#161E54]">
                  <p className="text-xs text-gray-300">
                    10:40 AM, Fri 10 Sept 2021
                  </p>
                  <p className="mt-3 text-lg font-medium">
                    You Posted a New Job
                  </p>
                  <p className="mt-3 text-sm">
                    Kindly check the requirements and terms of work and make
                    sure everything is right.
                  </p>
                  <div className="mt-5 lg:flex justify-between items-center">
                    <p className="text-sm mb-5 lg:mb-0">
                      Today you makes 12 Activity
                    </p>
                    <Button color="#FF5151" c="white">
                      See All Activity
                    </Button>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-[10px] border border-gray-300 ">
                <div className="p-3 flex justify-between items-center">
                  <p className="text-lg font-medium text-[#161E54]">
                    Upcomming Schedule
                  </p>
                  <div className="px-2 py-1 rounded-md border border-gray-200 flex items-center gap-2 text-gray-500">
                    <p>Today, 13 Sep 2021</p>
                    <IconChevronDown />
                  </div>
                </div>
                <div className="xs:max-h-[185px] lg:max-h-full p-3 flex flex-col gap-3 overflow-y-hidden">
                  <p className="text-sm text-[#686868]">Priority</p>
                  <Event
                    text="Review candidate applications"
                    lastUpdate="Today - 11:30 AM"
                  />
                  <p className="text-sm text-[#686868]">Other</p>
                  <Event
                    text="Interview with candidates"
                    lastUpdate="Today - 10:30 AM"
                  />
                  <Event
                    text="Short meeting with product designer from IT Departement"
                    lastUpdate="Today - 09:15 AM"
                  />
                </div>
                <Divider color="#d1d5db" />
                <div className="p-3 text-[#FF5151] text-center hover:text-opacity-60 hover:cursor-pointer">
                  {" "}
                  Create a New Schedule
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
