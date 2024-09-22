import Image from "next/image";
import MiniDrawer from "./components/Drawer";
import { TextInput } from "@mantine/core";
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="flex">
      <MiniDrawer />
      <div>
        <TextInput placeholder="Search" rightSection={<Search />} />
      </div>
    </div>
  );
}
