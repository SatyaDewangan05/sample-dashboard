const ThreeData = ({ bgColor, textColor }) => {
  var newBgColor = bgColor ? "bg-[" + bgColor + "]" : "bg-gray-300";
  return (
    <div className={`p-2 rounded-md ${newBgColor}`}>
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
