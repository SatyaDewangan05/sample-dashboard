const ThreeData = ({ bgColor, textColor }) => {
  return (
    <div
      className={`p-2 rounded-md bg-${
        bgColor ? "[" + bgColor + "]" : "gray-100"
      }`}
    >
      <p className="text-lg">Available Position</p>
      <p className="text-2xl">24</p>
      <p className={`text-base text-[#FF5151]`}>4 Urgently needed</p>
    </div>
  );
};

export default ThreeData;
