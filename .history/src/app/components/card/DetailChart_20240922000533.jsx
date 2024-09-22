const DetailChart = ({ heading, figure, texts, variation }) => {
  return (
    <div className="p-3 rounded-md flex flex-col gap-2">
      <p className="text-lg font-medium">{heading}</p>
      <p className="text-[36px] font-medium">{figure}</p>
      <div>
        {Array.isArray(texts)
          ? texts.map((text, index) => (
              <p key={index} className="text-base">
                {text}
              </p>
            ))
          : null}
      </div>
    </div>
  );
};

export default DetailChart;
