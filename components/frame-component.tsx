import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-3xs box-border flex flex-col items-center justify-start pt-[1.875rem] pb-[2.625rem] pr-[1.25rem] pl-[1.312rem] gap-[0.875rem] max-w-full text-center text-[1.375rem] text-white font-montserrat border-[0px] border-solid border-gray mq800:pt-[1.25rem] mq800:pb-[1.688rem] mq800:box-border ${className}`}
    >
      <img
        className="w-[33.875rem] h-[36.688rem] relative rounded-3xs hidden max-w-full"
        alt=""
        src="/rectangle-34.svg"
      />
      <div className="w-[23.813rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.625rem] box-border max-w-full">
        <h3 className="m-0 flex-1 relative text-inherit z-[1] font-inherit mq450:text-[1.125rem]">
          <p className="m-0">
            <span>
              <span className="font-medium">{`Good news, `}</span>
              <b className="font-montserrat">Muddashir!</b>
              <span className="font-medium">{` `}</span>
            </span>
          </p>
          <p className="m-0">
            <span>
              <span className="font-medium">{`You’re `}</span>
            </span>
            <b className="font-montserrat text-goldenrod">ELIGIBLE</b>
            <span className="text-white">
              <span className="font-medium font-montserrat">{` for the `}</span>
              <b className="font-montserrat">AIA Card</b>
              <span className="font-medium font-montserrat">!</span>
            </span>
          </p>
        </h3>
      </div>
      <div className="w-[23.813rem] h-[24.188rem] flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0.812rem] box-border max-w-full">
        <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[0.687rem] max-w-full">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/ai-analysis-team-1-1@2x.png"
          />
          <img
            className="self-stretch h-[9.25rem] relative max-w-full overflow-hidden shrink-0 object-cover z-[1]"
            loading="lazy"
            alt=""
            src="/screenshot-20240714-at-35632am-1@2x.png"
          />
        </div>
      </div>
      <div className="w-[23.813rem] flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0.812rem] box-border max-w-full">
        <button className="cursor-pointer [border:none] pt-[0.625rem] px-[1.25rem] pb-[0.562rem] bg-goldenrod flex-1 rounded-8xs flex flex-row items-start justify-center box-border whitespace-nowrap max-w-full z-[1] hover:bg-darkgoldenrod">
          <div className="h-[2.25rem] w-[22.125rem] relative rounded-8xs bg-goldenrod hidden max-w-full" />
          <b className="relative text-[0.875rem] inline-block font-montserrat text-black text-center min-w-[5rem] z-[2]">
            Apply Now
          </b>
        </button>
      </div>
    </div>
  );
};

export default FrameComponent;
