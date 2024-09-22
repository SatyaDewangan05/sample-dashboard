import Image from "next/image";
import Graph from "@/images/graph.png";
import GraphLine from "@/images/graph-line.png";
import UpArrow from "@/images/up-arrow.png";

const DetailChart = ({ heading, figure, texts, variation }) => {
  return (
    <div className="p-3 rounded-md border border-gray-400 flex items-center">
      <div className="flex flex-col gap-2">
        <p className="text-lg font-medium">{heading}</p>
        <p className="text-5xl font-medium">{figure}</p>
        <div>
          {Array.isArray(texts)
            ? texts.map((text, index) => (
                <p key={index} className="text-xs text-gray-600">
                  {text}
                </p>
              ))
            : null}
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col  items-center">
          <p className="text-xs text-[#FF5151] text-center">{variation}</p>
          <div className="h-[69px] w-[114px] relative">
            <Image
              src={UpArrow}
              className="absolute -top-1 left-1/2 -translate-x-1/2 z-30"
            />
            <Image src={GraphLine} className="absolute top-0 z-30" />
            <Image src={Graph} className="absolute top-0 z-30" />
          </div>
        </div>
        <div className="px-2 py-1 text-xs rounded bg-[#FFEFE7]">
          {variation} Past Month
        </div>
      </div>
    </div>
  );
};

export default DetailChart;
