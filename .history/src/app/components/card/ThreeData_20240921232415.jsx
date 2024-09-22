const ThreeData = ({ bgColor, textColor }) => {
  return (
    <div className={`rounded-md bg-[#FFEFE7] `}>
      <p className="text-xl">Available Position</p>
      <p className="text-3xl">24</p>
      <p
        className={`text-lg text-${
          textColor ? "[" + textColor + "]" : "white"
        }`}
      >
        4 Urgently needed
      </p>
    </div>
  );
};

export default ThreeData;
