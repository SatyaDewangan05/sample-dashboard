const ThreeData = ({ bgColor, textColor }) => {
  return (
    <div
      className="p-2 rounded-md flex flex-col gap-2"
      style={{ backgroundColor: bgColor ? bgColor : "gray" }}
    >
      <p className="text-lg">Available Position</p>
      <p className="text-2xl">24</p>
      <p
        className="text-base"
        style={{ color: textColor ? textColor : "white" }}
      >
        4 Urgently needed
      </p>
    </div>
  );
};

export default ThreeData;
