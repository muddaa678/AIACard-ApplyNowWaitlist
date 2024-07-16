import type { NextPage } from "next";
import EligibilityCriteria from "../components/eligibility-criteria";

const DesktopWaitlist: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-row items-end justify-start gap-[4.5rem] leading-[normal] tracking-[normal] mq800:gap-[2.25rem] mq450:gap-[1.125rem] mq1300:flex-wrap">
      <header className="h-[47.188rem] w-[46.875rem] relative box-border min-w-[46.875rem] max-w-full border-r-[1px] border-solid border-gray mq800:min-w-full mq1300:flex-1" />
      <div className="w-[33.875rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[2.562rem] box-border min-w-[33.875rem] min-h-[44.563rem] max-w-full mq800:pb-[1.688rem] mq800:box-border mq800:min-w-full mq1300:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[2rem] max-w-full mq800:gap-[1rem]">
          <img
            className="w-[12.375rem] h-[3.313rem] relative object-cover"
            loading="lazy"
            alt=""
            src="/ai-analysis-logo-13-1@2x.png"
          />
          <EligibilityCriteria />
        </div>
      </div>
    </div>
  );
};

export default DesktopWaitlist;
