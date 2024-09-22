const ThreeData = ({ bgColor, textColor }) => {
  return (
    <div
      className={`p-2 rounded-md ${
        bgColor ? "bg-[" + bgColor.toLowerCase() + "]" : "bg-gray-300"
      }`}
    >
      <p className="text-lg">Available Position</p>
      <p className="text-2xl">24</p>
      <p
        className={`text-base text-${
          textColor ? "[" + textColor + "]" : "white"
        }`}
      >
        4 Urgently needed
      </p>
    </div>
  );
};

export default ThreeData;
