import { useState } from "react";

const Event = () => {
  const [pinned, setPinned] = useState(false);
  return (
    <div className="p-3 rounded-md border flex justify-between items-center">
      <div>
        <p>Outing schedule for every departement</p>
        <p className="text-xs text-gray-500">5 Minutes ago</p>
      </div>
      <div className="flex gap-2 items-center">
        <IconPinFilled
          color={pinned ? "gray" : "unset"}
          onClick={() => setPinned((prevState) => !prevState)}
        />
        <IconDots />
      </div>
    </div>
  );
};

export default Event;
