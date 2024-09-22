import { IconDots, IconPinFilled } from "@tabler/icons-react";
import { useState } from "react";

const Event = ({ text, lastUpdate, pin }) => {
  const [pinned, setPinned] = useState(false);
  return (
    <div className="w-full p-3 rounded-md border flex justify-between items-center">
      <div>
        <p>{text}</p>
        <p className="text-xs text-gray-500">{lastUpdate}</p>
      </div>
      <div className="flex gap-2 items-center">
        {pin ? (
          <IconPinFilled
            color={pinned ? "unset" : "gray"}
            className="hover:cursor-pointer"
            onClick={() => setPinned((prevState) => !prevState)}
          />
        ) : null}
        <IconDots />
      </div>
    </div>
  );
};

export default Event;
