import Image from "next/image";
import MiniDrawer from "./components/Drawer";
import { TextInput } from "@mantine/core";

export default function Home() {
  return (
    <div className="flex">
      <MiniDrawer />
      <div>
        <TextInput
          label="Input label"
          description="Input description"
          placeholder="Input placeholder"
        />
      </div>
    </div>
  );
}
