const DetailChart = ({ heading, figure, text }) => {
  return (
    <div className="p-3 rounded-md flex flex-col gap-2">
      <p className="text-lg font-medium">{heading}</p>
      <p className="text-[36px] font-medium">{figure}</p>
      <p className="text-base">{text}</p>
    </div>
  );
};

export default DetailChart;
