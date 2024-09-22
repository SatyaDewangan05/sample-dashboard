const ThreeData = ({ heading, figure, text, bgColor, textColor }) => {
  return (
    <div
      className="p-2 rounded-md flex flex-col gap-4"
      style={{ backgroundColor: bgColor ? bgColor : "gray" }}
    >
      <p className="text-lg font-medium">{heading}</p>
      <p className="text-[36px] font-medium">{figure}</p>
      <p
        className="text-base"
        style={{ color: textColor ? textColor : "white" }}
      >
        {text}
      </p>
    </div>
  );
};

export default ThreeData;
