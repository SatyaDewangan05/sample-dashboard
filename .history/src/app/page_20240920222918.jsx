import Image from "next/image";
import MiniDrawer from "./components/Drawer";
import { TextInput } from "@mantine/core";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex">
      <MiniDrawer />
      <div className="px-12">
        {/* Top Bar */}
        <div className="py-5">
          <TextInput placeholder="Search" rightSection={<Search size={16} />} />
        </div>
      </div>
    </div>
  );
}
