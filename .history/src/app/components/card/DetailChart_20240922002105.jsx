import Image from "next/image";
import Graph from "@/images/graph.png";
import GraphLine from "@/images/graph-line.png";
import UpArrow from "@/images/up-arrow.png";

const DetailChart = ({ heading, figure, texts, variation }) => {
  return (
    <div className="p-3 rounded-md flex items-center">
      <div className="flex flex-col gap-2">
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
      <div>
        <div className="relative flex flex-col justify-between items-center">
          <p>{variation}</p>
          <div className="w-full relative z-10">
            <Image src={UpArrow} className="absolute top-0 z-30" />
            <Image src={GraphLine} className="absolute top-0 z-30" />
            <Image src={Graph} className="absolute top-0 z-30" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DetailChart;
